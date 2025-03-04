const apiKey = '995449ccaf6d840acc029f95c7d210dd';
let trailersCache = null;

// 1. Cache para trailers.json (sin cambios)
async function loadTrailers() {
    if (trailersCache) return trailersCache;
    
    try {
        const response = await fetch('trailers.json');
        if (!response.ok) throw new Error('Error al cargar trailers.json');
        const data = await response.json();

        const flattenedTrailers = {};
        Object.values(data).forEach(category => {
            category.forEach(movie => {
                flattenedTrailers[movie.id] = movie.trailer;
            });
        });

        trailersCache = flattenedTrailers;
        return flattenedTrailers;
    } catch (error) {
        console.error('Error loading trailers:', error);
        return {};
    }
}

// Función fetchContent corregida
async function fetchContent(type, endpoint) {
    try {
        const isTV = type === 'tv';
        const urlParams = endpoint.includes('?') ? '&' : '?';
        const url = `https://api.themoviedb.org/3/${endpoint}${urlParams}api_key=${apiKey}&language=es-MX`;
        
        const [response, trailers] = await Promise.all([
            fetch(url),
            loadTrailers()
        ]);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API Error: ${errorData.status_message}`);
        }

        const data = await response.json();
        return await Promise.all(data.results.map(async (item) => {  // <- Línea 68
            const trailerKey = item.id in trailers ? 
                trailers[item.id] : 
                await fetchTrailer(item.id, isTV ? 'tv' : 'movie');

            return {
    title: isTV ? item.name : item.title,
    image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
    // Corregir esta línea (mediaType no existe, usar isTV)
    link: `detalles.html?type=${isTV ? 'tv' : 'movie'}&title=${encodeURIComponent(isTV ? item.name : item.title)}`,
    year: (isTV ? item.first_air_date : item.release_date)?.split('-')[0] || 'N/A',
                rating: item.vote_average ? `${item.vote_average}/10` : 'N/A',
                genre: isTV ? 
                    (item.genres?.[0]?.name || 'TV: Serie') : 
                    (item.genres?.[0]?.name || 'Película'),
                synopsis: item.overview || "Sin sinopsis disponible.",
                trailer: trailerKey,
                ...(!isTV && {
                    duration: item.runtime ? 
                        `${Math.floor(item.runtime / 60)}h ${item.runtime % 60}m` : 'N/A',
                    cast: 'Reparto no disponible'
                })
            };
        }));  // <- Paréntesis faltante añadido aquí
    } catch (error) {
        console.error(`Error fetching ${type}:`, error.message);
        return [];
    }
}

// 3. Función fetchTrailer (sin cambios)
async function fetchTrailer(id, mediaType) {
    const languages = ['es-MX', 'es-ES', 'en-US'];
    
    for (const lang of languages) {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${apiKey}&language=${lang}`
            );
            const data = await response.json();
            const trailer = data.results.find(v => v.type === 'Trailer');
            if (trailer) return `https://www.youtube.com/embed/${trailer.key}`;
        } catch (error) {
            console.error(`Error en ${lang}:`, error);
        }
    }
    return '';
}

// 4. Carga paralela optimizada
let moviesData = {
    "Tendencias": [],
    "Mejor calificadas": [],
    "Series mejor clasificadas": [],
    "Próximos estrenos": [],
    "En cartelera": [],
    "Acción": [],
    "Comedia": [],
    "Terror": [],
    "Fantasía": [],
    "Ocultas": []
};

async function loadMovies() {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'block'; // Mostrar el loader

    const endpoints = [
        ['movie/popular', 'Tendencias'],
        ['movie/top_rated', 'Mejor calificadas'],
        ['tv/top_rated', 'Series mejor clasificadas'],
        ['movie/upcoming', 'Próximos estrenos'],
        ['movie/now_playing', 'En cartelera'],
        ['discover/movie?with_genres=28', 'Acción'],
        ['discover/movie?with_genres=35', 'Comedia'],
        ['discover/movie?with_genres=27', 'Terror'],
        ['discover/movie?with_genres=14', 'Fantasía'],
        ['discover/movie?sort_by=vote_count.asc&vote_count.gte=10', 'Ocultas']
    ];

    try {
        const results = await Promise.all(
            endpoints.map(([endpoint, key]) => 
                endpoint.startsWith('tv/') ? 
                    fetchContent('tv', endpoint) : 
                    fetchContent('movie', endpoint)
            )
        );

        endpoints.forEach(([_, key], index) => {
            moviesData[key] = results[index];
        });

        updateContent();
    } catch (error) {
        console.error('Error loading movies:', error);
    } finally {
        if (loader) loader.style.display = 'none'; // Ocultar el loader
    }
}

// 5. Corregir función generarContenido
// 1. Definir createMovieCard primero
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

// 2. Luego definir generarContenido
function generarContenido(container) {
    const visibleCategories = {
        "Tendencias": moviesData["Tendencias"],
        "Mejor calificadas": moviesData["Mejor calificadas"],
        "Series mejor clasificadas": moviesData["Series mejor clasificadas"],
        "Próximos estrenos": moviesData["Próximos estrenos"],
        "En cartelera": moviesData["En cartelera"],
        "Acción": moviesData["Acción"],
        "Comedia": moviesData["Comedia"],
        "Terror": moviesData["Terror"],
        "Fantasía": moviesData["Fantasía"]
    };    

    container.innerHTML = Object.entries(visibleCategories).map(([category, movies]) => {
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

// Resto de funciones UI permanecen igual...

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
        
        const updateButtons = () => {
            prevBtn.style.display = carousel.scrollLeft <= 0 ? 'none' : 'flex';
            nextBtn.style.display = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth ? 'none' : 'flex';
        };
        
        carousel.addEventListener('scroll', updateButtons);
        updateButtons();
    });
}

function updateContent() {
    const content = document.getElementById('content');
    if (content) generarContenido(content);
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
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
    setupSearch();

    document.getElementById('mark-liked')?.addEventListener('click', () => {
        const featuredMovie = {
            title: document.querySelector('.hero-title').textContent,
            image: document.querySelector('.featured-image').src,
            link: '#'
        };
        markAsLiked(featuredMovie);
    });
});
