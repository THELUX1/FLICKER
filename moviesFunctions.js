import { hiddenMovies, manualMovies, accionMovies, dramaMovies } from './moviesData.js';
import { profileManager } from './profileManager.js';

// Crear un objeto para almacenar las categorías de géneros
const genreCategories = {};

// Variable para llevar registro del orden de agregado
let movieAddOrder = 0;

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
function generarContenido(container) {
    const continueWatchingMovies = getContinueWatchingMovies();
    console.log("Películas para 'Continúa viendo':", continueWatchingMovies); // DEBUG

    const sortedManualMovies = [...manualMovies].sort((a, b) => {
        if (b.year !== a.year) {
            return (b.year || 0) - (a.year || 0);
        }
        return b.addOrder - a.addOrder;
    });

    // Objeto base con todas las categorías
    const allCategories = {
        "Recién Agregado": sortedManualMovies.slice(0, 12),
        "Acción": [...accionMovies].sort((a, b) => (b.year || 0) - (a.year || 0)),
        "Drama": [...dramaMovies].sort((a, b) => (b.year || 0) - (a.year || 0)),
    };

    // Añadir géneros
    Object.keys(genreCategories).forEach(genre => {
        allCategories[genre] = [...genreCategories[genre]].sort((a, b) => {
            if (b.year !== a.year) {
                return (b.year || 0) - (a.year || 0);
            }
            return b.addOrder - a.addOrder;
        });
    });

    // Crear objeto final de categorías visibles
    const visibleCategories = {...allCategories};

    // Solo añadir "Continúa viendo" si hay películas con progreso
    if (continueWatchingMovies.length > 0) {
        visibleCategories["Continúa viendo"] = continueWatchingMovies;
        
        // Mover "Continúa viendo" al principio
        const orderedCategories = {
            "Continúa viendo": continueWatchingMovies,
            ...allCategories
        };
        
        container.innerHTML = Object.entries(orderedCategories)
            .map(([category, movies]) => generateCategorySection(category, movies))
            .join('');
    } else {
        container.innerHTML = Object.entries(visibleCategories)
            .map(([category, movies]) => generateCategorySection(category, movies))
            .join('');
    }

    setupRemoveButtons();
    setupLazyLoading();
}

// Función auxiliar para generar secciones de categoría
function generateCategorySection(category, movies) {
    return `
        <section class="movie-section">
            <h2 class="section-title">${category}</h2>
            <div class="movies-container">
                ${movies.length > 0 ? movies.map(movie => createMovieCard(movie)).join('') : '<p class="no-movies">No hay contenido disponible.</p>'}
            </div>
        </section>
    `;
}

// Función para crear una tarjeta de película con lazy loading
function createMovieCard(movie) {
    // Calcular el porcentaje de progreso con validaciones
    let progressPercentage = 0;
    let showProgress = false;
    
    if (movie.progress && movie.duration) {
        // Asegurar que el progreso no exceda el 95% de la duración
        const maxValidProgress = movie.duration * 0.95;
        const validProgress = Math.min(movie.progress, maxValidProgress);
        progressPercentage = (validProgress / movie.duration) * 100;
        showProgress = true;
    }

    // Crear elementos de la tarjeta
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

    // Añadir indicador visual si está cerca del final
    const nearEndBadge = (progressPercentage > 80 && progressPercentage <= 95) ? `
        <div class="near-end-badge">Casi terminada</div>
    ` : '';

    return `
        <div class="movie-card" data-movie-id="${movie.id}">
            <a href="${movie.link}" class="movie-link">
                <div class="movie-image-container">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 450'%3E%3C/svg%3E" 
                         data-src="${movie.image}" 
                         alt="${movie.title}" 
                         loading="lazy"
                         class="lazy-image">
                    ${nearEndBadge}
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

// Configuración del lazy loading con Intersection Observer
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
            rootMargin: '200px 0px', // Carga imágenes 200px antes de que entren en la vista
            threshold: 0.1
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback para navegadores sin soporte
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy-image');
            img.classList.add('loaded-image');
        });
    }
}

// Función para obtener películas en "Seguir viendo" con soporte para perfiles
function getContinueWatchingMovies() {
    const continueWatching = [];
    const currentProfile = profileManager.getCurrentProfile();
    
    if (!currentProfile) return continueWatching;

    const now = Date.now();
    const oneWeekAgo = now - (7 * 24 * 60 * 60 * 1000); // Solo mostrar progresos de la última semana

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(`profile_${currentProfile.id}_progress_`)) {
            const movieId = key.split('_')[3];
            const progress = parseFloat(localStorage.getItem(key));
            const movie = [...manualMovies, ...accionMovies, ...dramaMovies, ...hiddenMovies].find(m => m.id == movieId);

            if (movie && progress > 0) {
                // Validar que el progreso no sea mayor al 95% de la duración
                const maxValidProgress = (movie.duration || 120 * 60) * 0.95;
                const validProgress = Math.min(progress, maxValidProgress);
                
                continueWatching.push({
                    ...movie,
                    progress: validProgress,
                    duration: movie.duration || 120 * 60 // Duración en segundos
                });
            }
        }
    }
    
    return continueWatching.sort((a, b) => b.progress - a.progress); // Ordenar por mayor progreso
}

function showConfirmModal(title, callback) {
    const modal = document.getElementById('confirm-modal');
    const confirmMessage = document.getElementById('confirm-message');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');

    // Asegurar que el modal esté encima de todo
    if (modal) {
        modal.style.zIndex = '1000';
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
    }

    // Mensaje más descriptivo
    if (confirmMessage) {
        confirmMessage.innerHTML = `
            <p>¿Eliminar<strong>"${title}"</strong>de tu lista de progreso?</p>
            <small>Esto borrará todos los datos de reproducción guardados.</small>
        `;
    }

    // Limpiar eventos anteriores para evitar duplicados
    const cleanUpEvents = () => {
        if (confirmYes) confirmYes.onclick = null;
        if (confirmNo) confirmNo.onclick = null;
        document.onkeydown = null;
    };

    // Configurar botón Sí
    if (confirmYes) {
        confirmYes.onclick = () => {
            cleanUpEvents();
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            callback(true);
        };
    }

    // Configurar botón No
    if (confirmNo) {
        confirmNo.onclick = () => {
            cleanUpEvents();
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            callback(false);
        };
    }

    // Cerrar con tecla Escape
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
                    // Animación de eliminación
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

// Función para eliminar de "Seguir viendo" con soporte para perfiles
function removeFromContinueWatching(movieId) {
    const currentProfile = profileManager.getCurrentProfile();
    if (!currentProfile) return;
    
    // Eliminar todas las posibles variantes de progreso
    const prefixes = [
        `profile_${currentProfile.id}_progress_`,
        `progress_`,
        `profile_${currentProfile.id}_seriesProgress_`,
        `seriesProgress_`
    ];
    
    // Buscar y eliminar todas las coincidencias
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (prefixes.some(prefix => key.startsWith(prefix + movieId))) {
            localStorage.removeItem(key);
            console.log(`Eliminado: ${key}`); // Debug
        }
    }
    
    // Marcar como eliminado para el reproductor
    sessionStorage.setItem(`deleted_${movieId}`, 'true');
    
    // No recargar inmediatamente (mejor experiencia de usuario)
    showToast(`Película eliminada de "Continúa viendo"`, 'success');
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
                   movie.year?.toString().includes(query);
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
                <img src="${movie.image}" alt="${movie.title}">
                <div class="search-result-info">
                    <h3>${movie.title}</h3>
                    ${movie.year ? `<p>${movie.year}</p>` : ''}
                </div>
            `;
            item.addEventListener('click', () => {
                const currentProfile = profileManager.getCurrentProfile();
                if (currentProfile) {
                    // Guardamos el último visto con el prefijo del perfil
                    localStorage.setItem(`profile_${currentProfile.id}_lastViewed`, movie.id);
                }
                window.location.href = movie.link;
            });
            searchResults.appendChild(item);
        });

        searchResults.style.display = 'block';
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    if (content) generarContenido(content);

    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';

    setupSearch();
});

// Exportar funciones
// Al final de moviesFunctions.js
export { generarContenido, setupSearch, createMovieCard };