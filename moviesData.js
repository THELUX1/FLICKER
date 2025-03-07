// Películas manuales
const manualMovies = [
    {
        id: 950396, // ID de TMDb para "Fight Club"
        title: "El Abismo Secreto",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/3s0jkMh0YUhIeIeioH3kt2X4st4.jpg",
        link: "detalles.html?type=movie&id=950396", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 822119, // ID de TMDb para "Fight Club"
        title: "Capitán América: Un Nuevo Mundo",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/xVwP4GCbEfO66JSSyonnAhU3Fad.jpg",
        link: "detalles.html?type=movie&id=822119", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 1084199, // ID de TMDb para "Fight Club"
        title: "Compañera Perfecta",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/nyloao2GWttUvS7KVcEM2eSDwUn.jpg",
        link: "detalles.html?type=movie&id=1084199", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 1126166, // ID de TMDb para "Fight Club"
        title: "Amenaza En El Aire",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/8T6nkYb4W8BIeafmFffyfsRciTL.jpg",
        link: "detalles.html?type=movie&id=1126166", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 823219, // ID de TMDb para "Fight Club"
        title: "Flow",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/337MqZW7xii2evUDVeaWXAtopff.jpg",
        link: "detalles.html?type=movie&id=823219", // Usamos el ID de TMDb
        year: "2024"
    }, 
    {
        id: 1064213, // ID de TMDb para "Fight Club"
        title: "Anora",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/n5wEFSLkm2fCtN0FVAuphrCAjf8.jpg",
        link: "detalles.html?type=movie&id=1064213", // Usamos el ID de TMDb
        year: "2024"
    },
    {
        id: 762509, // ID de TMDb para "Fight Club"
        title: "Mufasa El Rey León",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/dmw74cWIEKaEgl5Dv3kUTcCob6D.jpg",
        link: "detalles.html?type=movie&id=762509", // Usamos el ID de TMDb
        year: "2024"
    },
    {
        id: 1241982, // ID de TMDb para "Fight Club"
        title: "Moana 2",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/b1WsCRfomw7tRi12NuseKsAJxYK.jpg",
        link: "detalles.html?type=movie&id=1241982", // Usamos el ID de TMDb
        year: "2024"
    },
    {
        id: 939243, // ID de TMDb para "Fight Club"
        title: "Sonic 3: La Película",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/3aDWCRXLYOCuxjrjiPfLd79tcI6.jpg",
        link: "detalles.html?type=movie&id=939243", // Usamos el ID de TMDb
        year: "2024"
    },
    
];

// Función para generar el contenido de la página principal
const accionMovies = [
    {
        id: 822119, // ID de TMDb para "Fight Club"
        title: "Capitán América: Un Nuevo Mundo",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/xVwP4GCbEfO66JSSyonnAhU3Fad.jpg",
        link: "detalles.html?type=movie&id=822119", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 1126166, // ID de TMDb para "Fight Club"
        title: "Amenaza En El Aire",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/8T6nkYb4W8BIeafmFffyfsRciTL.jpg",
        link: "detalles.html?type=movie&id=1126166", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 950396, // ID de TMDb para "Fight Club"
        title: "El Abismo Secreto",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/3s0jkMh0YUhIeIeioH3kt2X4st4.jpg",
        link: "detalles.html?type=movie&id=950396", // Usamos el ID de TMDb
        year: "2025"
    },
];
const dramaMovies = [
    {
        id: 974576, // ID de TMDb para "Fight Club"
        title: "Cónclave",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/jkOgeASTlWwyKLBNblHVwWmAKhD.jpg",
        link: "detalles.html?type=movie&id=974576", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 933260, // ID de TMDb para "Fight Club"
        title: "The substance",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/w1PiIqM89r4AM7CiMEP4VLCEFUn.jpg",
        link: "detalles.html?type=movie&id=933260", // Usamos el ID de TMDb
        year: "2024"
    },
    {
        id: 1272149, // ID de TMDb para "Fight Club"
        title: "Bridget Jones: Loca Por Él",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/9K4xBef7N7YZTnke23FiNTHBGNU.jpg",
        link: "detalles.html?type=movie&id=1272149", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 1294203, // ID de TMDb para "Fight Club"
        title: "Culpa Mía: Londres",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/q0HxfkF9eoa6wSVnzwMhuDSK7ba.jpg",
        link: "detalles.html?type=movie&id=1294203", // Usamos el ID de TMDb
        year: "2025"
    },
];
const apiKey = '995449ccaf6d840acc029f95c7d210dd';
// En moviesData.js, al final de la función generarContenido
function generarContenido(container) {
    const continueWatchingMovies = getContinueWatchingMovies();
    const visibleCategories = {
        "Seguir viendo": continueWatchingMovies,
        "Recién Agregado": manualMovies,
        "Acción": accionMovies,
        "Drama": dramaMovies
    };

    container.innerHTML = Object.entries(visibleCategories).map(([category, movies]) => {
        if (movies.length === 0) return ''; // No mostrar categorías vacías
        return `
            <section class="movie-section">
                <h2 class="section-title">${category}</h2>
                <div class="movies-container">
                    ${movies.map(movie => createMovieCard(movie)).join('')}
                </div>
            </section>
        `;
    }).join('');

    // Generar la sección "Para ti"
    generateForYouSection(container);
}
// Función para obtener las películas que el usuario está viendo
function getContinueWatchingMovies() {
    const continueWatching = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("progress_")) {
            const movieId = key.split("_")[1];
            const progress = localStorage.getItem(key);
            const movie = manualMovies.find(m => m.id == movieId) || 
                          accionMovies.find(m => m.id == movieId) || 
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
// Función para crear una tarjeta de película
function createMovieCard(movie) {
    const progress = movie.progress ? `<div class="progress-bar"><div class="progress" style="width: ${(movie.progress / movie.duration) * 100}%"></div></div>` : '';
    const removeButton = movie.progress ? `
        <button class="remove-button" data-movie-id="${movie.id}">
            <i class="fas fa-trash"></i> <!-- Ícono de papelera -->
        </button>
    ` : '';

    return `
        <div class="movie-card">
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
                <div class="movie-title">${movie.title}</div>
                ${movie.year ? `<div class="movie-year">${movie.year}</div>` : ''}
                ${progress}
            </a>
            ${removeButton} <!-- Botón con ícono de eliminar -->
        </div>
    `;
}
function showConfirmModal(title, callback) {
    const modal = document.getElementById('confirm-modal');
    const confirmMessage = document.getElementById('confirm-message');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');

    confirmMessage.textContent = `¿Estás seguro de que quieres eliminar "${title}" de "Seguir viendo"?`;
    modal.style.display = 'flex';

    confirmYes.onclick = () => {
        modal.style.display = 'none';
        callback(true); // Confirmar eliminación
    };

    confirmNo.onclick = () => {
        modal.style.display = 'none';
        callback(false); // Cancelar eliminación
    };
}
function setupRemoveButtons() {
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar que el enlace se active
            const movieId = button.getAttribute('data-movie-id');
            const movieTitle = manualMovies.find(m => m.id == movieId)?.title || "esta película";

            // Mostrar el modal de confirmación
            showConfirmModal(movieTitle, (confirmed) => {
                if (confirmed) {
                    removeFromContinueWatching(movieId);
                }
            });
        });
    });
}

function removeFromContinueWatching(movieId) {
    localStorage.removeItem(`progress_${movieId}`);
    showToast(`Película eliminada de "Seguir viendo"`, 'success');
    // Recargar la página para actualizar la lista
    setTimeout(() => {
        window.location.reload();
    }, 1000);
}
function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;

    document.body.appendChild(toast);

    // Mostrar el toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Ocultar el toast después de 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300); // Esperar a que termine la animación de desvanecimiento
    }, 3000);
}
// Configuración del buscador
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
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
        .toLowerCase();

    // Combinar todas las listas de películas que quieras buscar
    const allMovies = [...manualMovies, ...accionMovies, ...dramaMovies]; // Agrega más listas si es necesario

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
                window.location.href = movie.link;
            });
            searchResults.appendChild(item);
        });

        searchResults.style.display = 'block';
    }
}
// En moviesData.js, antes de la inicialización

// Función para obtener recomendaciones
async function getRecommendations(movieId, type) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/${type}/${movieId}/recommendations?api_key=${apiKey}&language=es-MX`
        );
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error obteniendo recomendaciones:', error);
        return [];
    }
}

// Función para generar la sección "Para ti"
async function generateForYouSection(container) {
    const watchedHistory = JSON.parse(localStorage.getItem('watchedHistory') || '[]');
    if (watchedHistory.length === 0) return;

    // Obtener recomendaciones basadas en el historial
    const recommendations = [];
    for (const movieId of watchedHistory) {
        const recs = await getRecommendations(movieId, 'movie'); // Cambia a 'tv' si es una serie
        recommendations.push(...recs);
    }

    // Eliminar duplicados
    const uniqueRecommendations = recommendations.filter((movie, index, self) =>
        index === self.findIndex((m) => m.id === movie.id)
    );

    // Mostrar la sección "Para ti"
    if (uniqueRecommendations.length > 0) {
        const forYouSection = `
            <section class="movie-section">
                <h2 class="section-title">Para ti</h2>
                <div class="movies-container">
                    ${uniqueRecommendations.map(movie => createMovieCard({
                        id: movie.id,
                        title: movie.title,
                        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                        link: `detalles.html?type=movie&id=${movie.id}`,
                        year: movie.release_date?.split('-')[0] || 'N/A'
                    })).join('')}
                </div>
            </section>
        `;
        container.insertAdjacentHTML('afterbegin', forYouSection);
    }
}
// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    if (content) generarContenido(content);

    // Ocultar el loader después de cargar las películas manuales
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';

    // Configurar el buscador
    setupSearch();

    // Configurar los botones de "Eliminar"
    setupRemoveButtons();
});