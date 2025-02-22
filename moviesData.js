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

// Función para obtener tráiler desde la API de TMDb
// Función corregida para obtener tráiler desde TMDb
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
    "Mejor calificadas": [], // Nueva categoría
    "Próximos estrenos": [], // Nueva categoría
    "En cartelera": [] // Nueva categoría
};

// Cargar películas y actualizar interfaz
async function loadMovies() {
    moviesData["Tendencias"] = await fetchMovies('movie/popular');
     // Ejemplo: 4 películas recientes
    moviesData["Mejor calificadas"] = await fetchMovies('movie/top_rated'); // Cargar películas mejor calificadas
    moviesData["Próximos estrenos"] = await fetchMovies('movie/upcoming'); // Cargar próximos estrenos
    moviesData["En cartelera"] = await fetchMovies('movie/now_playing'); // Cargar películas en cartelera
    updateContent(); // Actualizar la interfaz
}

// Llamar a loadMovies() al cargar la página
loadMovies();

// ... (resto del código)

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
    const likedMovies = loadLikedMovies();
    const data = {
        "Me gusta": likedMovies,
        ...moviesData
    };

    container.innerHTML = Object.entries(data).map(([category, movies]) => {
    const isLiked = category === "Me gusta";
    return `
        <section class="movie-section ${isLiked ? 'liked-section' : ''}">
            <h2 class="section-title">${category}</h2>
            ${movies.length > 0 ? `
                <div class="${isLiked ? 'liked-container' : 'movies-container'}">
                    ${isLiked ? `
                        <div class="liked-carousel">
                            ${movies.map(movie => createMovieCard(movie, isLiked)).join('')}
                        </div>
                        <div class="liked-controls">
                            <button class="liked-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
                            <button class="liked-btn next-btn"><i class="fas fa-chevron-right"></i></button>
                        </div>
                    ` : `
                        ${movies.map(movie => createMovieCard(movie)).join('')}
                    `}
                </div>
            ` : isLiked ? `
                <div class="liked-empty">
                    <i class="fas fa-heart"></i>
                    <p>No has añadido ninguna película a Me gusta todavía</p>
                </div>
            ` : ''}
        </section>
    `;
}).join('');

    if (likedMovies.length > 0) {
        setupCarouselControls();
    }
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

// Configuración del menú
function setupMenu() {
    const menuBtn = document.querySelector('.menu-hamburguesa');
    const navMenu = document.querySelector('.nav-menu');
    const closeBtn = document.querySelector('.close-menu');

    if (menuBtn && navMenu && closeBtn) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.add('active'); // Mostrar el menú
        });

        closeBtn.addEventListener('click', () => {
            navMenu.classList.remove('active'); // Ocultar el menú
        });
    } else {
        console.error('Elementos del menú no encontrados.');
    }
}

// Configuración de búsqueda
function setupSearch() {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const searchResults = document.querySelector('.search-results');
    let searchTimeout;

    searchButton?.addEventListener('click', (e) => {
        e.preventDefault();
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            searchInput.focus();
        } else {
            clearSearch();
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

    function searchMovies(query) {
        const allMovies = Object.values(moviesData).flat();
        return allMovies.filter(movie => {
            return movie.title.toLowerCase().includes(query) ||
                   (movie.cast?.toLowerCase().includes(query)) ||
                   (movie.genre?.toLowerCase().includes(query)) ||
                   (movie.year?.toString().includes(query));
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

    function clearSearch() {
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
    }
}
// Función para cargar una página dinámicamente
async function loadPage(url) {
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    const newDocument = parser.parseFromString(html, 'text/html');
    const newContent = newDocument.querySelector('.content').innerHTML;

    // Animación de salida
    const currentPage = document.querySelector('.content');
    currentPage.classList.add('page-exit');

    setTimeout(() => {
        // Reemplazar el contenido
        document.querySelector('.content').innerHTML = newContent;
        // Animación de entrada
        document.querySelector('.content').classList.add('page-enter');
    }, 500); // Duración de la transición
}

// Manejar clics en enlaces
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        loadPage(link.href);
    });
});

// Manejar el botón "Atrás" del navegador
window.addEventListener('popstate', () => {
    loadPage(window.location.href);
});

// Precargar páginas cuando el usuario pasa el mouse sobre un enlace
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        preloadPage(link.href);
    });
});

// Función para precargar páginas
function preloadPage(url) {
    fetch(url).then(response => response.text());
}
// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    setupMenu();
    setupSearch();
    
    // Marcar película destacada como "Me gusta"
    document.getElementById('mark-liked')?.addEventListener('click', () => {
        const featuredMovie = {
            title: document.querySelector('.hero-title').textContent,
            image: document.querySelector('.featured-image').src,
            link: '#'
        };
        markAsLiked(featuredMovie);
    });
});;