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

    const visibleCategories = {
        "Continúa viendo": continueWatchingMovies,
        "Recién Agregado": sortedManualMovies.slice(0, 12),
        "Acción": [...accionMovies].sort((a, b) => (b.year || 0) - (a.year || 0)),
        "Drama": [...dramaMovies].sort((a, b) => (b.year || 0) - (a.year || 0)),
    };

    Object.keys(genreCategories).forEach(genre => {
        visibleCategories[genre] = [...genreCategories[genre]].sort((a, b) => {
            if (b.year !== a.year) {
                return (b.year || 0) - (a.year || 0);
            }
            return b.addOrder - a.addOrder;
        });
    });

    container.innerHTML = Object.entries(visibleCategories)
        .map(([category, movies]) => {
            return `
                <section class="movie-section">
                    <h2 class="section-title">${category}</h2>
                    <div class="movies-container">
                        ${movies.length > 0 ? movies.map(movie => createMovieCard(movie)).join('') : '<p class="no-movies">No hay contenido disponible.</p>'}
                    </div>
                </section>
            `;
        })
        .join('');

    setupRemoveButtons();
    setupLazyLoading();
}

// Función para crear una tarjeta de película con lazy loading
function createMovieCard(movie) {
    const progress = movie.progress ? `<div class="progress-bar"><div class="progress" style="width: ${(movie.progress / movie.duration) * 100}%"></div></div>` : '';
    const removeButton = movie.progress ? `
        <button class="remove-button" data-movie-id="${movie.id}">
            <i class="fas fa-trash"></i>
        </button>
    ` : '';

    return `
        <div class="movie-card">
            <a href="${movie.link}">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 450'%3E%3C/svg%3E" 
                     data-src="${movie.image}" 
                     alt="${movie.title}" 
                     loading="lazy"
                     class="lazy-image">
                <div class="movie-title">${movie.title}</div>
                ${movie.year ? `<div class="movie-year">${movie.year}</div>` : ''}
                ${progress}
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
    
    // Buscamos las claves que corresponden al perfil actual
    const profilePrefix = `profile_${currentProfile.id}_progress_`;
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(profilePrefix)) {
            const movieId = key.split('_')[3];
            const progress = localStorage.getItem(key);
            const movie = manualMovies.find(m => m.id == movieId) || 
                          accionMovies.find(m => m.id == movieId) ||
                          hiddenMovies.find(m => m.id == movieId) || 
                          dramaMovies.find(m => m.id == movieId);
            if (movie) {
                continueWatching.push({
                    ...movie,
                    progress: parseFloat(progress)
                });
            }
        }
    }
    return continueWatching;
}

function showConfirmModal(title, callback) {
    const modal = document.getElementById('confirm-modal');
    const confirmMessage = document.getElementById('confirm-message');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');

    if (confirmMessage) confirmMessage.textContent = `¿Estás seguro de que quieres eliminar "${title}"?`;
    if (modal) modal.style.display = 'flex';

    if (confirmYes) {
        confirmYes.onclick = () => {
            if (modal) modal.style.display = 'none';
            callback(true);
        };
    }

    if (confirmNo) {
        confirmNo.onclick = () => {
            if (modal) modal.style.display = 'none';
            callback(false);
        };
    }
}

function setupRemoveButtons() {
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const movieId = button.getAttribute('data-movie-id');
            const movieTitle = manualMovies.find(m => m.id == movieId)?.title || "esta película";
            showConfirmModal(movieTitle, (confirmed) => {
                if (confirmed) {
                    removeFromContinueWatching(movieId);
                }
            });
        });
    });
}

// Función para eliminar de "Seguir viendo" con soporte para perfiles
function removeFromContinueWatching(movieId) {
    const currentProfile = profileManager.getCurrentProfile();
    if (!currentProfile) return;
    
    localStorage.removeItem(`profile_${currentProfile.id}_progress_${movieId}`);
    showToast(`Película eliminada`, 'success');
    setTimeout(() => {
        window.location.reload();
    }, 1000);
}

function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
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
export { generarContenido, setupSearch, createMovieCard }; // Añade createMovieCard a las exportaciones
