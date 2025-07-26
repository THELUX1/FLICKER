import { hiddenMovies, manualMovies, accionMovies, dramaMovies } from './moviesData.js';
import { profileManager } from './profileManager.js';
import UserTracker from './userTracking.js';

// Crear un objeto para almacenar las categorías de géneros
const genreCategories = {};

// Variable para llevar registro del orden de agregado
let movieAddOrder = 0;

// Variable para almacenar las recomendaciones actuales
let currentRecommendations = [];

function classifyMoviesByGenre(movies, isManual = false) {
    movies.forEach(movie => {
        // Asignamos un timestamp de orden de agregado
        movie.addOrder = movieAddOrder++;
        
        if (movie.genres) {
            movie.genres.forEach(genre => {
                if (!genreCategories[genre]) {
                    genreCategories[genre] = [];
                }
                // Si es una película manual (recién agregada), la insertamos al principio
                if (isManual) {
                    genreCategories[genre].unshift(movie);
                } else {
                    genreCategories[genre].push(movie);
                }
            });
        }
    });
}

// Clasificar las películas manuales, de acción, de drama y las ocultas
classifyMoviesByGenre(manualMovies, true);
classifyMoviesByGenre(accionMovies);
classifyMoviesByGenre(dramaMovies);
classifyMoviesByGenre(hiddenMovies);

// Función para generar el contenido de la página principal
function generarContenido(container, forceRefresh = false) {
    console.log("[MoviesFunctions] Generando contenido principal...");
    
    // Forzar actualización si es necesario
    if (forceRefresh) {
        UserTracker.refreshRecommendations();
    }

    const continueWatchingMovies = getContinueWatchingMovies();
    const allMovies = [...manualMovies, ...accionMovies, ...dramaMovies, ...hiddenMovies];
    const currentProfile = profileManager.getCurrentProfile();
    
    // Objeto con categorías base que siempre se muestran
    const baseCategories = {
        "Recién agregado": [...manualMovies].slice(0, 12),
        "Acción": [...accionMovies],
        "Drama": [...dramaMovies],
    };

    // Categorías personalizadas (solo si el usuario tiene historial)
    const personalizedCategories = {};
    
    // Verificar si el usuario tiene suficiente historial para recomendaciones
    const hasViewingHistory = currentProfile && UserTracker.hasSufficientHistory();
    
    if (hasViewingHistory) {
        console.log("[MoviesFunctions] Usuario tiene historial, generando recomendaciones personalizadas");
        currentRecommendations = UserTracker.getRecommendedMovies(allMovies);
        const trackingData = UserTracker.getTrackingData();
        
        if (currentRecommendations.length > 0) {
            personalizedCategories["Para ti"] = currentRecommendations;
            
            // Agrupar recomendaciones por razón
            if (Object.keys(trackingData.likedGenres).length > 0 || 
                Object.keys(trackingData.watchedGenres).length > 0) {
                
                currentRecommendations.forEach(movie => {
                    if (movie.reasons) {
                        movie.reasons.forEach(reason => {
                            const reasonKey = reason.includes("Te gusta") ? 
                                `Más como ${reason.split("Te gusta ")[1]}` : reason;
                            
                            if (!personalizedCategories[reasonKey]) {
                                personalizedCategories[reasonKey] = [];
                            }
                            if (!personalizedCategories[reasonKey].some(m => m.id === movie.id)) {
                                personalizedCategories[reasonKey].push(movie);
                            }
                        });
                    }
                });
            }
        }
        
        // Mostrar categorías por géneros favoritos
        const topGenres = UserTracker.getTopGenres(3, 'likes');
        topGenres.forEach(genre => {
            const genreMovies = allMovies.filter(movie => 
                movie.genres?.includes(genre) && 
                !trackingData.viewedMovies.includes(movie.id)
            ).slice(0, 12);
            
            if (genreMovies.length > 0) {
                personalizedCategories[`Más ${genre} como te gusta`] = genreMovies;
            }
        });
    }

    // Combinar todas las categorías
    const allCategories = {
        ...(continueWatchingMovies.length > 0 ? {"Continúa viendo": continueWatchingMovies} : {}),
        ...(hasViewingHistory ? personalizedCategories : {}),
        ...baseCategories,
        ...Object.fromEntries(
            Object.entries(genreCategories)
                .map(([genre, movies]) => [genre, movies.slice(0, 12)])
        )
    };

    // Ordenar categorías para mostrar primero las personalizadas
    const categoryPriority = [
        "Continúa viendo",
        "Para ti",
        ...Object.keys(personalizedCategories).filter(k => k !== "Para ti"),
        "Recién agregado",
        "Acción",
        "Drama"
    ];

    // Generar HTML en el orden deseado
    container.innerHTML = categoryPriority
        .filter(category => allCategories[category]?.length > 0)
        .map(category => generateCategorySection(category, allCategories[category]))
        .join('');

    setupRemoveButtons();
    setupLazyLoading();
    
    if (hasViewingHistory) {
        setupRecommendationTooltips();
        highlightNewRecommendations();
    }
}

function generateCategorySection(category, movies) {
    const isPersonalized = category === "Para ti" || 
                         category.startsWith("Porque") || 
                         category.startsWith("Más") ||
                         category.startsWith("Con tus") ||
                         category.startsWith("Dirigida");
    
    const titleClass = isPersonalized ? 'personalized' : '';
    const icon = isPersonalized ? '<i class="fas fa-user-circle"></i> ' : '';
    const isContinueWatching = category === "Continúa viendo";
    
    return `
        <section class="movie-section">
            <h2 class="section-title ${titleClass}">${icon}${category}</h2>
            <div class="movies-container ${isContinueWatching ? 'continue-watching' : ''}">
                ${movies.length > 0 ? movies.map(movie => createMovieCard(movie)).join('') : '<p class="no-movies">No hay contenido disponible.</p>'}
            </div>
        </section>
    `;
}

function createMovieCard(movie) {
    // Calcular el porcentaje de progreso
    let progressPercentage = 0;
    let showProgress = false;
    
    if (movie.progress && movie.duration) {
        const maxValidProgress = movie.duration * 0.99;
        const validProgress = Math.min(movie.progress, maxValidProgress);
        progressPercentage = (validProgress / movie.duration) * 100;
        showProgress = true;
    }

    const isRecommended = movie.reasons && movie.reasons.length > 0;
    const recommendationAttrs = isRecommended ? 
        `data-reasons='${JSON.stringify(movie.reasons)}' data-score="${movie.recommendationScore}"` : '';

    const progressBar = showProgress ? `
        <div class="continue-progress" data-progress="${Math.round(progressPercentage)}%">
            <div class="continue-progress-bar" style="width: ${progressPercentage}%"></div>
        </div>
    ` : '';

    const removeButton = showProgress ? `
        <button class="remove-button" data-movie-id="${movie.id}" aria-label="Eliminar de Continuar viendo">
            <i class="fas fa-trash"></i>
        </button>
    ` : '';

    const nearEndBadge = (progressPercentage > 80 && progressPercentage <= 95) ? `
        <div class="near-end-badge">Casi terminada</div>
    ` : '';

    const recommendationBadge = isRecommended ? `
        <div class="recommendation-badge" title="Recomendado para ti">
            <i class="fas fa-star"></i>
        </div>
    ` : '';

    return `
        <div class="movie-card ${isRecommended ? 'recommended' : ''}" 
             data-movie-id="${movie.id}" ${recommendationAttrs}>
            <a href="${movie.link}" class="movie-link">
                <div class="movie-image-container">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 450'%3E%3C/svg%3E" 
                         data-src="${movie.image}" 
                         alt="${movie.title}" 
                         loading="lazy"
                         class="lazy-image">
                    ${nearEndBadge}
                    ${recommendationBadge}
                </div>
                <div class="movie-info">
                    <div class="movie-title">${movie.title}</div>
                    ${movie.year ? `<div class="movie-year">${movie.year}</div>` : ''}
                </div>
                ${progressBar}
            </a>
            ${removeButton}
        </div>
    `;
}

function setupRecommendationTooltips() {
    document.querySelectorAll('.movie-card[data-reasons]').forEach(card => {
        const reasons = JSON.parse(card.getAttribute('data-reasons'));
        const tooltip = document.createElement('div');
        tooltip.className = 'recommendation-tooltip';
        tooltip.innerHTML = `<strong>Porque:</strong> ${reasons.join('<br>• ')}`;
        card.appendChild(tooltip);
        
        card.addEventListener('mouseenter', () => {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', () => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });
    });
}

function highlightNewRecommendations() {
    // Obtener el timestamp de la última visita
    const lastVisit = localStorage.getItem('lastHomeVisit') || 0;
    const now = Date.now();
    
    // Destacar recomendaciones añadidas desde la última visita
    document.querySelectorAll('.movie-card.recommended').forEach(card => {
        const movieId = card.getAttribute('data-movie-id');
        const movie = [...manualMovies, ...accionMovies, ...dramaMovies].find(m => m.id == movieId);
        
        if (movie && movie.addOrder * 1000 > lastVisit) {
            card.classList.add('highlight');
        }
    });
    
    // Actualizar el timestamp de visita
    localStorage.setItem('lastHomeVisit', now);
}

function setupLazyLoading() {
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-image');
                    img.classList.add('loaded-image');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '200px 0px',
            threshold: 0.1
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy-image');
            img.classList.add('loaded-image');
        });
    }
}

function getContinueWatchingMovies() {
    const continueWatching = [];
    const currentProfile = profileManager.getCurrentProfile();
    
    if (!currentProfile) return continueWatching;

    const now = Date.now();
    const oneWeekAgo = now - (7 * 24 * 60 * 60 * 1000);

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(`profile_${currentProfile.id}_progress_`) || 
            key.startsWith(`profile_${currentProfile.id}_seriesProgress_`)) {
            
            const isSeries = key.includes('seriesProgress_');
            const movieId = isSeries ? key.split('_')[4] : key.split('_')[3];
            
            let progressData;
            if (isSeries) {
                progressData = JSON.parse(localStorage.getItem(key));
            } else {
                progressData = {
                    currentTime: parseFloat(localStorage.getItem(key)),
                    duration: 120 * 60 // Duración por defecto para películas (2 horas)
                };
            }
            
            const movie = [...manualMovies, ...accionMovies, ...dramaMovies, ...hiddenMovies].find(m => m.id == movieId);

            if (movie && progressData.currentTime > 0) {
                // Validar que el progreso no sea mayor al 95% de la duración
                const maxValidProgress = (progressData.duration || 120 * 60) * 0.90;
                const validProgress = Math.min(progressData.currentTime, maxValidProgress);
                
                continueWatching.push({
                    ...movie,
                    progress: validProgress,
                    duration: progressData.duration || 120 * 60
                });
            }
        }
    }
    
    // Ordenar por progreso descendente y luego por última visualización
    return continueWatching.sort((a, b) => {
        const progressDiff = b.progress - a.progress;
        if (progressDiff !== 0) return progressDiff;
        
        // Si el progreso es igual, ordenar por última visualización
        const aKey = a.episodeNumber ? 
            `profile_${currentProfile.id}_seriesProgress_${a.id}_${a.episodeNumber}` : 
            `profile_${currentProfile.id}_progress_${a.id}`;
            
        const bKey = b.episodeNumber ? 
            `profile_${currentProfile.id}_seriesProgress_${b.id}_${b.episodeNumber}` : 
            `profile_${currentProfile.id}_progress_${b.id}`;
            
        const aTimestamp = localStorage.getItem(aKey + '_timestamp') || 0;
        const bTimestamp = localStorage.getItem(bKey + '_timestamp') || 0;
        
        return bTimestamp - aTimestamp;
    });
}

function showConfirmModal(title, callback) {
    const modal = document.getElementById('confirm-modal');
    const confirmMessage = document.getElementById('confirm-message');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');

    if (modal) {
        modal.style.zIndex = '1000';
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
    }

    if (confirmMessage) {
        confirmMessage.innerHTML = `
            <p>¿Eliminar <strong>"${title}"</strong> de tu lista de progreso?</p>
            <small>Esto borrará todos los datos de reproducción guardados.</small>
        `;
    }

    const cleanUpEvents = () => {
        if (confirmYes) confirmYes.onclick = null;
        if (confirmNo) confirmNo.onclick = null;
        document.onkeydown = null;
    };

    if (confirmYes) {
        confirmYes.onclick = () => {
            cleanUpEvents();
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            callback(true);
        };
    }

    if (confirmNo) {
        confirmNo.onclick = () => {
            cleanUpEvents();
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            callback(false);
        };
    }

    document.onkeydown = (e) => {
        if (e.key === 'Escape') {
            cleanUpEvents();
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            callback(false);
        }
    };
}

function setupRemoveButtons() {
    document.querySelectorAll('.remove-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const movieId = button.getAttribute('data-movie-id');
            const movie = [...manualMovies, ...accionMovies, ...dramaMovies, ...hiddenMovies]
                         .find(m => m.id == movieId);

            if (!movie) return;

            showConfirmModal(movie.title, (confirmed) => {
                if (confirmed) {
                    const card = button.closest('.movie-card');
                    if (card) {
                        card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
                        card.style.transform = 'scale(0.8)';
                        card.style.opacity = '0';
                        
                        setTimeout(() => {
                            card.remove();
                            removeFromContinueWatching(movieId);
                        }, 300);
                    }
                }
            });
        });
    });
}

function removeFromContinueWatching(movieId) {
    const currentProfile = profileManager.getCurrentProfile();
    if (!currentProfile) return;
    
    const prefixes = [
        `profile_${currentProfile.id}_progress_`,
        `profile_${currentProfile.id}_seriesProgress_`
    ];
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (prefixes.some(prefix => key.startsWith(prefix + movieId))) {
            localStorage.removeItem(key);
        }
    }
    
    sessionStorage.setItem(`deleted_${movieId}`, 'true');
    showToast(`Película eliminada de "Continúa viendo"`, 'success');
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function setupSearch() {
    const searchIconButton = document.querySelector('.search-icon-button');
    const searchWrapper = document.querySelector('.search-wrapper');
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button.close-search');
    const searchResults = document.querySelector('.search-results');
    let searchTimeout;

    searchIconButton?.addEventListener('click', (e) => {
        e.preventDefault();
        searchWrapper.style.display = 'flex';
        searchInput.focus();
    });

    searchButton?.addEventListener('click', (e) => {
        e.preventDefault();
        hideSearch();
    });

    document.addEventListener('click', (e) => {
        const isClickInsideSearch = searchWrapper.contains(e.target) || searchIconButton.contains(e.target);
        if (!isClickInsideSearch && searchInput.value.trim() === '' && searchResults.innerHTML === '') {
            hideSearch();
        }
    });

    searchInput?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim().toLowerCase();

        if (query.length === 0) {
            clearSearch();
            return;
        }

        searchTimeout = setTimeout(() => {
            const results = searchMovies(query);
            displayResults(results);
        }, 300);
    });

    function hideSearch() {
        searchWrapper.style.display = 'none';
        clearSearch();
    }

    function clearSearch() {
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
    }

    function searchMovies(query) {
        const normalizedQuery = query
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

        const allMovies = [...manualMovies, ...accionMovies, ...dramaMovies, ...hiddenMovies];
        const seenTitles = new Set();
        const uniqueMovies = [];

        allMovies.forEach(movie => {
            if (!seenTitles.has(movie.title)) {
                seenTitles.add(movie.title);
                uniqueMovies.push(movie);
            }
        });

        return uniqueMovies.filter(movie => {
            const normalizedTitle = movie.title
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .toLowerCase();
            return normalizedTitle.includes(normalizedQuery) ||
                   movie.year?.toString().includes(query) ||
                   (movie.genres && movie.genres.some(g => g.toLowerCase().includes(normalizedQuery)));
        });
    }

    function displayResults(results) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No se encontraron resultados</div>';
            searchResults.style.display = 'block';
            return;
        }

        results.forEach(movie => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            item.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}" loading="lazy">
                <div class="search-result-info">
                    <h3>${movie.title}</h3>
                    ${movie.year ? `<p>${movie.year}</p>` : ''}
                    ${movie.genres ? `<div class="search-result-genres">${movie.genres.slice(0, 2).join(' • ')}</div>` : ''}
                </div>
            `;
            item.addEventListener('click', () => {
                const currentProfile = profileManager.getCurrentProfile();
                if (currentProfile) {
                    localStorage.setItem(`profile_${currentProfile.id}_lastViewed`, movie.id);
                }
                window.location.href = movie.link;
            });
            searchResults.appendChild(item);
        });

        searchResults.style.display = 'block';
    }
}

function setupRecommendationUpdates() {
    profileManager.onProfileChange(() => {
        generarContenido(document.getElementById('content'), true);
    });
    
    window.addEventListener('recommendationsUpdated', () => {
        generarContenido(document.getElementById('content'), true);
    });
    
    setInterval(() => {
        generarContenido(document.getElementById('content'), true);
    }, 30000);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("[MoviesFunctions] Inicializando...");
    UserTracker.init();
    const content = document.getElementById('content');
    if (content) generarContenido(content);

    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';

    setupSearch();
    setupRecommendationUpdates();
    localStorage.setItem('lastHomeVisit', Date.now());
});

export { 
    generarContenido, 
    setupSearch, 
    createMovieCard,
    getContinueWatchingMovies,
    removeFromContinueWatching,
    showToast
};