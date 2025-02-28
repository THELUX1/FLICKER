const apiKey = '995449ccaf6d840acc029f95c7d210dd'; // Tu API Key de TMDb

// Función para cargar el archivo trailers.json y aplanar las categorías
async function loadTrailers() {
    try {
        const response = await fetch('trailers.json');
        if (!response.ok) throw new Error('Error al cargar el archivo trailers.json');
        const data = await response.json();

        // Aplanar categorías: crear un objeto { id: trailerURL }
        const flattenedTrailers = {};
        for (const category of Object.values(data)) {
            for (const movie of category) {
                flattenedTrailers[movie.id] = movie.trailer;
            }
        }

        return flattenedTrailers;
    } catch (error) {
        console.error('Error loading trailers:', error);
        return {};
    }
}

// Función para obtener series de TMDb
async function fetchTVShows(endpoint) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}&language=es-MX&page=1`);
        if (!response.ok) throw new Error('Error al obtener datos de la API');
        const data = await response.json();

        const trailers = await loadTrailers();

        const tvShows = await Promise.all(data.results.map(async (show) => {
            const trailer = trailers[show.id] || await fetchTVShowTrailer(show.id);
            return {
                title: show.name, // ¡Usar .name en lugar de .title!
                image: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
                link: `detallesseries.html?title=${encodeURIComponent(show.name)}`,
                year: show.first_air_date?.split('-')[0] || 'N/A',
                rating: show.vote_average ? `${show.vote_average}/10` : 'N/A',
                genre: show.genres && show.genres.length > 0 ? 'TV: ' + show.genres[0].name : 'TV: Serie', // 👈 Verificación de genres
                synopsis: show.overview || "Sin sinopsis disponible.",
                trailer: trailer
            };
        }));

        return tvShows;
    } catch (error) {
        console.error('Error fetching TV shows:', error);
        return [];
    }
}
// Función genérica para obtener películas de TMDb
async function fetchMovies(endpoint) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}&language=es-MX&page=1`);
        if (!response.ok) throw new Error('Error al obtener datos de la API');
        const data = await response.json();

        // Cargar los tráilers desde el archivo JSON
        const trailers = await loadTrailers();

        // Usar Promise.all para manejar las promesas dentro del map
        const movies = await Promise.all(data.results.map(async (movie) => {
            const trailer = trailers[movie.id] || await fetchMovieTrailer(movie.id); // Obtener el tráiler desde el archivo o la API
            return {
                title: movie.title,
                image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                link: `detalles.html?title=${encodeURIComponent(movie.title)}`,
                year: movie.release_date?.split('-')[0] || 'N/A',
                rating: movie.vote_average ? `${movie.vote_average}/10` : 'N/A',
                duration: movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : 'N/A',
                genre: 'Acción', // Temporal - Se puede mejorar
                cast: 'Reparto no disponible', // Temporal
                synopsis: movie.overview || "Sin sinopsis disponible.",
                trailer: trailer, // Asignar el tráiler obtenido
                videoUrl: 'N/A' // Mantenemos tu estructura actual
            };
        }));

        return movies; // Retornar las películas con los tráilers
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
}

// Función para obtener tráiler de series desde la API
async function fetchTVShowTrailer(tvShowId) {
    const languages = ['es-MX', 'es-ES', 'en-US'];
    try {
        for (const lang of languages) {
            const response = await fetch(`https://api.themoviedb.org/3/tv/${tvShowId}/videos?api_key=${apiKey}&language=${lang}`);
            if (!response.ok) throw new Error(`Error al obtener tráiler en ${lang}`);
            const data = await response.json();
            const trailer = data.results.find(video => video.type === 'Trailer');
            if (trailer) return `https://www.youtube.com/embed/${trailer.key}`;
        }
        return '';
    } catch (error) {
        console.error('Error fetching TV show trailer:', error);
        return '';
    }
}
// Función para obtener tráiler desde la API de TMDb
async function fetchMovieTrailer(movieId) {
    const languages = ['es-MX', 'es-ES', 'en-US'];
    try {
        for (const lang of languages) {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=${lang}`);
            if (!response.ok) throw new Error(`Error al obtener tráiler en ${lang}`);
            const data = await response.json();
            const trailer = data.results.find(video => video.type === 'Trailer');
            if (trailer) return `https://www.youtube.com/embed/${trailer.key}`;
        }
        return '';
    } catch (error) {
        console.error('Error fetching trailer:', error);
        return '';
    }
}

// Datos iniciales (se actualizarán con TMDb)
let moviesData = {
    "Tendencias": [],
    "Mejor calificadas": [],
    "Series mejor clasificadas": [], // Nueva categoría
    "Próximos estrenos": [],
    "En cartelera": []
};

// Cargar películas y actualizar interfaz
async function loadMovies() {
    moviesData["Tendencias"] = await fetchMovies('movie/popular');
    moviesData["Mejor calificadas"] = await fetchMovies('movie/top_rated');
    moviesData["Series mejor clasificadas"] = await fetchTVShows('tv/top_rated'); // Nueva función para obtener series
    moviesData["Próximos estrenos"] = await fetchMovies('movie/upcoming');
    moviesData["En cartelera"] = await fetchMovies('movie/now_playing');
    updateContent(); // Actualizar la interfaz
}


// Llamar a loadMovies() al cargar la página
loadMovies();

// Cargar películas "Me gusta" desde localStorage
function loadLikedMovies() {
    const storedMovies = localStorage.getItem('likedMovies');
    return storedMovies ? JSON.parse(storedMovies) : [];
}

// Guardar películas "Me gusta" en localStorage
function saveLikedMovies(movies) {
    localStorage.setItem('likedMovies', JSON.stringify(movies));
}

// Función para mostrar toast notifications
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-times-circle'}"></i>
        ${message}
    `;
    document.body.appendChild(toast);

    // Mostrar el toast
    setTimeout(() => toast.classList.add('show'), 100);

    // Ocultar el toast después de 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300); // Eliminar el toast del DOM
    }, 3000);
}

// Función para mostrar el modal de confirmación
function showConfirmModal(movieTitle) {
    const modal = document.getElementById('confirm-modal');
    const confirmMessage = document.getElementById('confirm-message');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');

    // Actualizar el mensaje del modal
    confirmMessage.textContent = `¿Estás seguro de que quieres eliminar "${movieTitle}" de la lista de Me gusta?`;

    // Mostrar el modal
    modal.style.display = 'flex';

    // Manejar la respuesta del usuario
    confirmYes.onclick = () => {
        modal.style.display = 'none';
        const likedMovies = loadLikedMovies();
        const updatedMovies = likedMovies.filter(m => m.title !== movieTitle);
        saveLikedMovies(updatedMovies);
        showToast(`${movieTitle} ha sido eliminada de Me gusta.`, 'success');
        updateContent(); // Actualizar la lista de "Me gusta"
    };

    confirmNo.onclick = () => {
        modal.style.display = 'none';
    };
}

// Marcar película como "Me gusta"
function markAsLiked(movie) {
    const likedMovies = loadLikedMovies();
    if (!likedMovies.some(m => m.title === movie.title)) {
        likedMovies.unshift(movie);
        saveLikedMovies(likedMovies);
        showToast(`${movie.title} ha sido añadida a Me gusta.`, 'success');
        updateContent(); // Actualizar la lista de "Me gusta"
    } else {
        showToast(`${movie.title} ya está en tu lista de Me gusta.`, 'error');
    }
}

// Eliminar película de la lista de "Me gusta"
function removeFromLiked(movieTitle) {
    showConfirmModal(movieTitle);
}

// Crear tarjeta de película
function createMovieCard(movie, isLiked = false) {
    return `
        <div class="movie-card">
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
                <div class="movie-title">${movie.title}</div>
            </a>
            ${isLiked ? `
                <button class="remove-liked" onclick="removeFromLiked('${movie.title}')">
                    <i class="fas fa-times"></i>
                </button>
            ` : ''}
        </div>
    `;
}

// Generar contenido principal
function generarContenido(container) {
    const data = {
        "Tendencias": moviesData["Tendencias"],
        "Mejor calificadas": moviesData["Mejor calificadas"],
        "Series mejor clasificadas": moviesData["Series mejor clasificadas"], // 👈 Incluir la nueva categoría
        "Próximos estrenos": moviesData["Próximos estrenos"],
        "En cartelera": moviesData["En cartelera"]
    };

    container.innerHTML = Object.entries(data).map(([category, movies]) => {
        return `
            <section class="movie-section">
                <h2 class="section-title">${category}</h2>
                <div class="movies-container">
                    ${movies.map(movie => createMovieCard(movie)).join('')}
                </div>
            </section>
        `;
    }).join('');
}

// Configurar controles del carrusel
function setupCarouselControls() {
    const carousels = document.querySelectorAll('.liked-container');
    
    carousels.forEach(container => {
        const carousel = container.querySelector('.liked-carousel');
        const prevBtn = container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next-btn');
        
        const scrollAmount = 300;
        
        prevBtn?.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        
        nextBtn?.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        
        // Ocultar/mostrar botones según posición
        const updateButtons = () => {
            prevBtn.style.display = carousel.scrollLeft <= 0 ? 'none' : 'flex';
            nextBtn.style.display = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth ? 'none' : 'flex';
        };
        
        carousel.addEventListener('scroll', updateButtons);
        updateButtons();
    });
}

// Actualizar contenido
function updateContent() {
    const content = document.getElementById('content');
    if (content) generarContenido(content);
}

// Configuración de búsqueda
function setupSearch() {
    const searchIconButton = document.querySelector('.search-icon-button'); // Ícono de búsqueda
    const searchWrapper = document.querySelector('.search-wrapper'); // Contenedor de la barra de búsqueda
    const searchInput = document.querySelector('.search-input'); // Campo de entrada de búsqueda
    const searchButton = document.querySelector('.search-button.close-search'); // Botón para cerrar la búsqueda
    const searchResults = document.querySelector('.search-results'); // Contenedor de resultados
    let searchTimeout;

    // Mostrar la barra de búsqueda al hacer clic en el ícono de búsqueda
    searchIconButton?.addEventListener('click', (e) => {
        e.preventDefault();
        searchWrapper.style.display = 'flex';
        searchInput.focus();
    });

    // Ocultar la barra de búsqueda al hacer clic en el botón de cerrar (X)
    searchButton?.addEventListener('click', (e) => {
        e.preventDefault();
        hideSearch();
    });

    // Ocultar la barra de búsqueda al hacer clic fuera de ella (solo si no hay resultados o no se ha buscado nada)
    document.addEventListener('click', (e) => {
        const isClickInsideSearch = searchWrapper.contains(e.target) || searchIconButton.contains(e.target);
        if (!isClickInsideSearch && searchInput.value.trim() === '' && searchResults.innerHTML === '') {
            hideSearch();
        }
    });

    // Lógica de búsqueda al escribir en el campo de búsqueda
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

    // Función para ocultar la barra de búsqueda
    function hideSearch() {
        searchWrapper.style.display = 'none';
        clearSearch();
    }

    // Función para limpiar la búsqueda
    function clearSearch() {
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
    }

    // Función para buscar películas
    function searchMovies(query) {
        const allMovies = Object.values(moviesData).flat();
        return allMovies.filter(movie => {
            return movie.title.toLowerCase().includes(query) ||
                   (movie.cast?.toLowerCase().includes(query)) ||
                   (movie.genre?.toLowerCase().includes(query)) ||
                   (movie.year?.toString().includes(query));
        });
    }

    // Función para mostrar los resultados de búsqueda
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
                    ${movie.year ? `<p>${movie.year} • ${movie.genre || ''}</p>` : ''}
                </div>
            `;
            item.addEventListener('click', () => {
                window.location.href = movie.link;
            });
            searchResults.appendChild(item);
        });

        searchResults.style.display = 'block';
    }


    // Función para limpiar la búsqueda
    function clearSearch() {
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    setupSearch(); // Configura la búsqueda

    // Marcar película destacada como "Me gusta"
    document.getElementById('mark-liked')?.addEventListener('click', () => {
        const featuredMovie = {
            title: document.querySelector('.hero-title').textContent,
            image: document.querySelector('.featured-image').src,
            link: '#'
        };
        markAsLiked(featuredMovie);
    });
});