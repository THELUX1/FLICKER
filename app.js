// Datos de películas
const moviesData = {
    "Tendencias": [
        {
         title: "Capitán América: Un Nuevo Mundo",
         image: "https://pics.filmaffinity.com/Capitaan_Amaerica_Brave_New_World-108007469-large.jpg",
        link: `Películas/Capitán América Un Nuevo Mundo/Capitán América Un Nuevo Mundo D.html?title=${encodeURIComponent("Capitán América: Un Nuevo Mundo")}`,
        "year": 2025,
        "genre": "Acción",
        "cast": "Chris Evans, Sebastian Stan"
    },
    {
         title: "El Abismo Secreto",
         image: "https://image.tmdb.org/t/p/w342//bJToUFSmdyDR1qx2hmjXFJld5vK.jpg",
        link: `Películas/El Abismo Secreto/El Abismo Secreto D.html?title=${encodeURIComponent("El Abismo Secreto")}`,
        "year": 2025,
        "genre": "Acción,Romance,Suspenso",
        "cast": "Adam Scott-Rowley, Alessandro Garcia, Anya Taylor-Joy, Greta Hansen, James Marlowe"
    },
    {
        "title":"Ne Zha 2(próx)",
        "image": "https://tse1.mm.bing.net/th?id=OIP.qEWofGqDIVSafLreQ7IoTQEJF4&pid=Api",
        "link": `Películas/Ne Zha 2/Ne Zha 2 D.html?title=${encodeURIComponent("Ne Zha 2")}`,
        "year": 2025,
        "genre": "Animación, Fantasía",
        "cast": "Voces en chino"
    },
    {
        "title": "Mickey 17(próximamente)",
        "image": "https://tse3.mm.bing.net/th?id=OIP.yUW6TAMCr6q9NtLv6IeTXQHaK-&pid=Api",
        "link": `#?title=${encodeURIComponent("Mickey 17")}`,
        "year": 2025,
        "genre": "Ciencia Ficción, Drama",
        "cast": "Robert Pattinson, Steven Yeun"
    },
    {
         title: "The Order",
         image: "https://pics.filmaffinity.com/The_Order_La_hermandad_silenciosa-654856932-large.jpg",
        link: `Películas/The Order/The Order D.html?title=${encodeURIComponent("The Order")}`,
        "year": 2024,
        "genre": "Thriller",
        "cast": "Jude Law, Nicholas Hoult, Tye Sheridan, Jurnee Smollett, Alison Oliver, Marc Maron"
    },
    {
            title: "La Acompañante",
            image: "https://pics.filmaffinity.com/La_acompaanante-438784716-large.jpg", // URL de la imagen de Nosferatu
            link: `Películas/La Acompañante/La Acompañante D.html?title=${encodeURIComponent("La Acompañante")}`,
            year: 2025,
            genre: "Ci-Fi, Thriller",
            cast: "Sophie Thatcher, Jack Quaid, Lukas Gage"
    },
    {
            title: "Nosferatu",
            image: "https://pics.filmaffinity.com/Nosferatu-417207191-large.jpg", // URL de la imagen de Nosferatu
            link: `Películas/Nosferatu/Nosferatu D.html?title=${encodeURIComponent("Nosferatu")}`,
            year: 2024,
            genre: "Terror, Misterio",
            cast: "Lily-Rose DeppNicholas HoultBill Skarsgård"
        },
        {
            title: "Gladiator II",
            image: "https://pics.filmaffinity.com/Gladiator_II-152686913-large.jpg", // URL de la imagen de Nosferatu
            link: `Películas/Gladiator II/Gladiator II D.html?title=${encodeURIComponent("Gladiator II")}`,
            year: 2024,
            genre: "Acción, Aventura, Drama",
            cast: "Abdelmoula Ait Sidi Lhassan, Alec Utgoff, Alexander Karim, Alexander Simkin, Alfie Tempest"
        },
    /* {
        "title": "Emilia Pérez",
        "image": "https://tse3.mm.bing.net/th?id=OIP.0FCA-tsCNZkZaLx5qAhJwQHaNK&pid=Api",
        "link": `Películas/Emilia Pérez/Emilia Pérez D.html?title=${encodeURIComponent("Emilia Pérez")}`,
        "year": 2025,
        "genre": "Musical, Drama",
        "cast": "Karla Sofía Gascón, Selena Gomez"
    }, */
    /* {
        "title": "The Brutalist",
        "image": "https://tse3.mm.bing.net/th?id=OIP.MeJY9us9gm164XxfCOFgEgHaEK&pid=Api",
        "link": `#?title=${encodeURIComponent("The Brutalist")}`,
        "year": 2025,
        "genre": "Drama",
        "cast": "Adrien Brody, Felicity Jones"
      }, */ 
     ],   
    "Drama": [
        {
            title: "Nosferatu",
            image: "https://pics.filmaffinity.com/Nosferatu-417207191-large.jpg", // URL de la imagen de Nosferatu
            link: `Películas/Nosferatu/Nosferatu D.html?title=${encodeURIComponent("Nosferatu")}`,
            year: 2024,
            genre: "Terror",
            cast: "Max Schreck, Gustav von Wangenheim"
        },
        {
            title: "La Sociedad De La Nieve",
            image: "https://pics.filmaffinity.com/La_sociedad_de_la_nieve-323264210-large.jpg", // URL de la imagen de Cadena Perpetua
            link: `Películas/La Sociedad De La Nieve/La Sociedad De La Nieve D.html?title=${encodeURIComponent("La Sociedad De La Nieve")}`,
            year: 2023,
            genre: "Drama",
            cast: "Enzo Vogrincic, Agustín Pardella, Matías Recalt"
        }, 
        {
            title: "Cadena Perpetua",
            image: "https://pics.filmaffinity.com/Cadena_perpetua-187366518-large.jpg", // URL de la imagen de Cadena Perpetua
            link: `#?title=${encodeURIComponent("Cadena Perpetua")}`,
            year: 1994,
            genre: "Drama",
            cast: "Tim Robbins, Morgan Freeman"
        },                 
    ], 
    "Lo Nuevo Del 2025": [
        {
            title: "Los Simpson Pasado Furioso",
            image: "https://pics.filmaffinity.com/Los_Simpson_The_Past_and_the_Furious_TV-616588707-large.jpg", // URL de la imagen de Nosferatu
            link: `Películas/Los Simpson Pasado Furioso/Los Simpson Pasado Furioso D.html?title=${encodeURIComponent("Los Simpson Pasado Furioso")}`,
            year: 2025,
            genre: "Comedia, Animación",
            cast: "Los Simpson"
        },
        {
         title: "Capitán América: Un Nuevo Mundo",
         image: "https://pics.filmaffinity.com/Capitaan_Amaerica_Brave_New_World-108007469-large.jpg",
        link: `Películas/Capitán América Un Nuevo Mundo/Capitán América Un Nuevo Mundo D.html?title=${encodeURIComponent("Capitán América: Un Nuevo Mundo")}`,
        "year": 2025,
        "genre": "Acción",
        "cast": "Chris Evans, Sebastian Stan"
        },
        {
         title: "El Abismo Secreto",
         image: "https://image.tmdb.org/t/p/w342//bJToUFSmdyDR1qx2hmjXFJld5vK.jpg",
        link: `Películas/El Abismo Secreto/El Abismo Secreto D.html?title=${encodeURIComponent("El Abismo Secreto")}`,
        "year": 2025,
        "genre": "Acción,Romance,Suspenso",
        "cast": "Adam Scott-Rowley, Alessandro Garcia, Anya Taylor-Joy, Greta Hansen, James Marlowe"
        },
        {
            title: "La Acompañante",
            image: "https://pics.filmaffinity.com/La_acompaanante-438784716-large.jpg", // URL de la imagen de Nosferatu
            link: `Películas/La Acompañante/La Acompañante D.html?title=${encodeURIComponent("La Acompañante")}`,
            year: 2025,
            genre: "Ci-Fi, Thriller",
            cast: "Sophie Thatcher, Jack Quaid, Lukas Gage"
        },
        
                         
    ],
    "Acción": [
        {
            title: "Mad Max: Fury Road",
            image: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
            link: `#?title=${encodeURIComponent("Mad Max: Fury Road")}`,
            year: 2015,
            genre: "Acción",
            cast: "Tom Hardy, Charlize Theron"
        },
        {
            title: "John Wick",
            image: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg",
            link: `Películas/John Wick/John Wick D.html?title=${encodeURIComponent("John Wick")}`,
            year: 2014,
            genre: "Acción",
            cast: "Keanu Reeves, Michael Nyqvist"
        },
        {
            title: "Gladiador II",
            image: "https://pics.filmaffinity.com/Gladiator_II-152686913-large.jpg", 
            link: `Películas/Gladiator II/Gladiator II D.html?title=${encodeURIComponent("Gladiator II")}`,
            year: 2024, // Año de estreno
            genre: "Acción",
            cast: "Paul Mescal, Denzel Washington"
        }
    ],
    "Fantasía": [
        {
            title: "El Señor de los Anillos: La Comunidad del Anillo",
            image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
            link: `#?title=${encodeURIComponent("El Señor de los Anillos: La Comunidad del Anillo")}`,
            year: 2001,
            genre: "Fantasía",
            cast: "Elijah Wood, Ian McKellen, Viggo Mortensen"
        },
        {
            title: "Harry Potter y la Piedra Filosofal",
            image: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_FMjpg_UX1000_.jpg",
            link: `#?title=${encodeURIComponent("Harry Potter y la Piedra Filosofal")}`,
            year: 2001,
            genre: "Fantasía",
            cast: "Daniel Radcliffe, Emma Watson, Rupert Grint"
        }
    ],
     
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
