// Datos de películas
        const moviesData = {
            "Seguir viendo": [
                {
                    title: "Capitán América: Un Nuevo Mundo",
                    image: "https://pics.filmaffinity.com/Capitaan_Amaerica_Brave_New_World-108007469-large.jpg",
                    link: `detalles.html?title=${encodeURIComponent("Capitán América: Un Nuevo Mundo")}`,
                    year: 2025,
                    rating: "8.5/10",
                    duration: "2h 10m",
                    genre: "Acción",
                    cast: "Chris Evans, Sebastian Stan",
                    synopsis: "Una nueva aventura del Capitán América...",
                    trailer:"https://www.youtube.com/embed/RXoqRPP-y5c",
                    videoUrl: "https://zte054upd8.guardstorage.net/hls_3/m7xRpfOTH7U_jpz19n7TKk35mE7HzR-C6mzUyo5N1hyNPMB47VQt-7LvHm9OouHx3XlN7ihWv-A6hke_xyO4gQtRhrA7GTKBMVM7bxrzb0S1oQZpSwdaHndr-7B4TjeyFnVC9a131NiGRF_y_J-4UMzN0MigwCrAgIxo-5kLiRuJMxfhGXmrwgTNsvuxqsPr1Rrv5yUfYX7fw0sJ7I0j_Q/index-f2-v1-a1.m3u8?sig=fpPNtGgfXmit5l4KaUFc6w&expires=1739852556"
                },
                // ... otros objetos de películas
            ],
            "Recientes": [
                {
                    title: "Capitán América: Un Nuevo Mundo",
                    image: "https://pics.filmaffinity.com/Capitaan_Amaerica_Brave_New_World-108007469-large.jpg",
                    link: `detalles.html?title=${encodeURIComponent("Capitán América: Un Nuevo Mundo")}`,
                    year: 2025,
                    rating: "8.5/10",
                    duration: "2h 10m",
                    genre: "Acción",
                    cast: "Chris Evans, Sebastian Stan",
                    synopsis: "Una nueva aventura del Capitán América...",
                    trailer:"https://www.youtube.com/embed/RXoqRPP-y5c",
                    videoUrl: "https://zte054upd8.guardstorage.net/hls_3/m7xRpfOTH7U_jpz19n7TKk35mE7HzR-C6mzUyo5N1hyNPMB47VQt-7LvHm9OouHx3XlN7ihWv-A6hke_xyO4gQtRhrA7GTKBMVM7bxrzb0S1oQZpSwdaHndr-7B4TjeyFnVC9a131NiGRF_y_J-4UMzN0MigwCrAgIxo-5kLiRuJMxfhGXmrwgTNsvuxqsPr1Rrv5yUfYX7fw0sJ7I0j_Q/index-f2-v1-a1.m3u8?sig=fpPNtGgfXmit5l4KaUFc6w&expires=1739852556"
                },
                // ... otros objetos de películas
            ],
            
            // ... otras categorías
        };

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
                ` : `
                    <div class="liked-empty">
                        <i class="fas fa-heart"></i>
                        <p>No has añadido ninguna película a Me gusta todavía</p>
                    </div>
                `}
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

    menuBtn?.addEventListener('click', () => navMenu.classList.add('active'));
    closeBtn?.addEventListener('click', () => navMenu.classList.remove('active'));
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
});
