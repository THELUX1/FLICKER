const apiKey = '995449ccaf6d840acc029f95c7d210dd';
let trailersCache = null;

// 1. Cache para trailers.json
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

// 2. Función unificada para obtener contenido
async function fetchContent(type, endpoint) {
    try {
        const isTV = type === 'tv';
        const [response, trailers] = await Promise.all([
            fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}&language=es-MX&page=1`),
            loadTrailers()
        ]);

        if (!response.ok) throw new Error('Error en la API');
        const data = await response.json();

        return await Promise.all(data.results.map(async (item) => {
            const trailerKey = item.id in trailers ? 
                trailers[item.id] : 
                await fetchTrailer(item.id, isTV ? 'tv' : 'movie');

            return {
                title: isTV ? item.name : item.title,
                image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                link: `detalles.html?title=${encodeURIComponent(isTV ? item.name : item.title)}`,
                year: (isTV ? item.first_air_date : item.release_date)?.split('-')[0] || 'N/A',
                rating: item.vote_average ? `${item.vote_average}/10` : 'N/A',
                genre: isTV ? 
                    (item.genres?.[0]?.name || 'TV: Serie') : 
                    'Acción', // Mantenido temporal
                synopsis: item.overview || "Sin sinopsis disponible.",
                trailer: trailerKey,
                ...(!isTV && {
                    duration: item.runtime ? 
                        `${Math.floor(item.runtime / 60)}h ${item.runtime % 60}m` : 'N/A',
                    cast: 'Reparto no disponible'
                })
            };
        }));
    } catch (error) {
        console.error(`Error fetching ${type}:`, error);
        return [];
    }
}

// 3. Función unificada para trailers
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
    "En cartelera": []
};

async function loadMovies() {
    const endpoints = [
        ['movie/popular', 'Tendencias'],
        ['movie/top_rated', 'Mejor calificadas'],
        ['tv/top_rated', 'Series mejor clasificadas'],
        ['movie/upcoming', 'Próximos estrenos'],
        ['movie/now_playing', 'En cartelera']
    ];

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
}

// Funciones de UI y almacenamiento (sin cambios)
function loadLikedMovies() {
    const storedMovies = localStorage.getItem('likedMovies');
    return storedMovies ? JSON.parse(storedMovies) : [];
}

function saveLikedMovies(movies) {
    localStorage.setItem('likedMovies', JSON.stringify(movies));
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-times-circle'}"></i>
        ${message}
    `;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function showConfirmModal(movieTitle) {
    const modal = document.getElementById('confirm-modal');
    const confirmMessage = document.getElementById('confirm-message');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');

    confirmMessage.textContent = `¿Estás seguro de eliminar "${movieTitle}" de Me gusta?`;
    modal.style.display = 'flex';

    confirmYes.onclick = () => {
        modal.style.display = 'none';
        const likedMovies = loadLikedMovies();
        const updatedMovies = likedMovies.filter(m => m.title !== movieTitle);
        saveLikedMovies(updatedMovies);
        showToast(`${movieTitle} eliminada de Me gusta`, 'success');
        updateContent();
    };

    confirmNo.onclick = () => {
        modal.style.display = 'none';
    };
}

function markAsLiked(movie) {
    const likedMovies = loadLikedMovies();
    if (!likedMovies.some(m => m.title === movie.title)) {
        likedMovies.unshift(movie);
        saveLikedMovies(likedMovies);
        showToast(`${movie.title} añadida a Me gusta`, 'success');
        updateContent();
    } else {
        showToast(`${movie.title} ya está en Me gusta`, 'error');
    }
}

function removeFromLiked(movieTitle) {
    showConfirmModal(movieTitle);
}

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

function generarContenido(container) {
    const data = {
        "Tendencias": moviesData["Tendencias"],
        "Mejor calificadas": moviesData["Mejor calificadas"],
        "Series mejor clasificadas": moviesData["Series mejor clasificadas"],
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