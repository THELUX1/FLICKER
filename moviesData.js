// Películas manuales (vacío, ya que omitimos las películas)
const hiddenMovies = [
{
          id: 1426674,
          title: "Una Historia De Amor En Copenhague",
          image: "https://s.lupacine.com/image/t/p/w500/aau2E9HW5TvlxoNPHET6ZnAcV72.jpg",
          link: "detalles.html?type=movie&id=1426674",
          year: "2025",
          genres: ["Drama", "Romance"] // <-- Asegúrate de que esto esté definido
      },
    {
        id: 1422179,
        title: "Por El Mal Camino",
        image: "https://s.lupacine.com/image/t/p/w500/7uVdqyf7xiHeGjxhnRTKjGnO0Gm.jpg",
        link: "detalles.html?type=movie&id=1422179",
        year: "2025",
        genres: ["Comedia", "Drama"]
    },
    {
        id: 1426142,
        title: "Ricos, Sin Duda",
        image: "https://s.lupacine.com/image/t/p/w500/cr6y0nWdfPb3yZT9Iz63zTE1dQE.jpg",
        link: "detalles.html?type=movie&id=1426142",
        year: "2025",
        genres: ["Romance", "Comedia"]
    }
];
const manualMovies = [
{
          id: 1104845,
          title: "Plankton: La Película",
          image: "https://s.lupacine.com/image/t/p/w500/hGaUNLF5VZbg9ovPTyjm9Rv5xWz.jpg",
          link: "detalles.html?type=movie&id=1104845",
          year: "2025",
          genres: ["Animación", "Comedia", "Aventura", "Familia", "Fantasía"] // <-- Asegúrate de que esto esté definido
      },
{
          id: 1356039,
          title: "Counterstrike",
          image: "https://s.lupacine.com/image/t/p/w500/lI2uFlSEkwXKljqiry7coaJ6wIS.jpg",
          link: "detalles.html?type=movie&id=1356039",
          year: "2025",
          genres: ["Acción", "Fantasía", "Suspenso"] // <-- Asegúrate de que esto esté definido
      },
{
          id: 1124620,
          title: "El Mono",
          image: "https://s.lupacine.com/image/t/p/w500/yYa8Onk9ow7ukcnfp2QWVvjWYel.jpg",
          link: "detalles.html?type=movie&id=1124620",
          year: "2025",
          genres: ["Comedia", "Terror"] // <-- Asegúrate de que esto esté definido
      },
{
          id: 799766,
          title: "Better Man",
          image: "https://media.themoviedb.org/t/p/w220_and_h330_face/otXaS8K5coAwmUyGxBsNz9mWs8H.jpg",
          link: "detalles.html?type=movie&id=799766",
          year: "2025",
          genres: ["Música", "Drama"] // <-- Asegúrate de que esto esté definido
      },
{
          id: 1140535,
          title: "Presencia",
          image: "https://media.themoviedb.org/t/p/w220_and_h330_face/kc7YIx6KNiXm1dpqlhqdX3eTL7a.jpg",
          link: "detalles.html?type=movie&id=1140535",
          year: "2025",
          genres: ["Drama", "Terror"] // <-- Asegúrate de que esto esté definido
      },
{
          id: 1418522,
          title: "Delicia",
          image: "https://s.lupacine.com/image/t/p/w500/o1ZIvviAEuIHcH9x6sv112mSvTR.jpg",
          link: "detalles.html?type=movie&id=1418522",
          year: "2025",
          genres: ["Drama", "Suspenso"] // <-- Asegúrate de que esto esté definido
      },
{
          id: 777443,
          title: "Estado Eléctrico",
          image: "https://media.themoviedb.org/t/p/w220_and_h330_face/nCuSMDWhWGJAPdp9rSDIogG5X82.jpg",
          link: "detalles.html?type=movie&id=777443",
          year: "2025",
          genres: ["Ciencia ficción", "Aventura", "Drama"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 426063,
          title: "Nosferatu",
          image: "https://media.themoviedb.org/t/p/w220_and_h330_face/jivUhECegXI3OYtPVflWoIDtENt.jpg",
          link: "detalles.html?type=movie&id=426063",
          year: "2024",
          genres: ["Fantasía", "Terror"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 696506,
          title: "Mickey 17",
          image: "https://media.themoviedb.org/t/p/w220_and_h330_face/fjIHkLGIZdjKIKe252gSFt5QzVK.jpg",
          link: "detalles.html?type=movie&id=696506",
          year: "2025",
          genres: ["Ciencia ficción", "Aventura", "Comedia"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 1357633,
          title: "Solo Leveling: Segundo Despertar",
          image: "https://s.lupacine.com/image/t/p/w500/dblIFen0bNZAq8icJXHwrjfymDW.jpg",
          link: "detalles.html?type=movie&id=1357633",
          year: "2024",
          genres: ["Acción", "Aventura", "Fantasía", "Animación"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 710295,
          title: "Hombre Lobo",
          image: "https://s.lupacine.com/image/t/p/w500/vtdEHG1j07PqLlVyhKNZRHTPKGt.jpg",
          link: "detalles.html?type=movie&id=710295",
          year: "2025",
          genres: ["Terror", "Suspenso"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 539972,
          title: "Kraven el cazador",
          image: "https://s.lupacine.com/image/t/p/w500/1GvBhRxY6MELDfxFrete6BNhBB5.jpg",
          link: "detalles.html?type=movie&id=539972",
          year: "2024",
          genres: ["Acción", "Aventura", "Fantasía", "Suspenso", "Ciencia ficción"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 774370,
          title: "Las aventuras de Dog Man",
          image: "https://s.lupacine.com/image/t/p/w500/89wNiexZdvLQ41OQWIsQy4O6jAQ.jpg",
          link: "detalles.html?type=movie&id=774370",
          year: "2025",
          genres: ["Animación", "Aventura", "Acción", "Comedia", "Familia"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 516729,
          title: "Paddington: Aventura en la selva",
          image: "https://s.lupacine.com/image/t/p/w500/1ffZAucqfvQu36x1C49XfOdjuOG.jpg",
          link: "detalles.html?type=movie&id=516729",
          year: "2024",
          genres: ["Aventura", "Comedia", "Familia"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 912649,
          title: "Venom: El último baile",
          image: "https://s.lupacine.com/image/t/p/w500/vGXptEdgZIhPg3cGlc7e8sNPC2e.jpg",
          link: "detalles.html?type=movie&id=912649",
          year: "2024",
          genres: ["Aventura", "Acción", "Suspenso", "Ciencia ficción"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 1247019,
          title: "Thi Yot 2: Susurros Mortales",
          image: "https://s.lupacine.com/image/t/p/w500/uDW5eeFUYp1vaU2ymEdVBG6g7iq.jpg",
          link: "detalles.html?type=movie&id=1247019",
          year: "2024",
          genres: ["Terror", "Acción", "Suspenso"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 1138749,
          title: "The Island",
          image: "https://s.lupacine.com/image/t/p/w500/ajb1rMiorchfRemYHZCkbV9DBg6.jpg",
          link: "detalles.html?type=movie&id=1138749",
          year: "2023",
          genres: ["Acción", "Suspenso", "Crimen"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 558449,
          title: "Gladiador II",
          image: "https://s.lupacine.com/image/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
          link: "detalles.html?type=movie&id=558449",
          year: "2024",
          genres: ["Aventura", "Drama", "Acción", "Historia"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 1201012,
          title: "Dhoom Dhaam",
          image: "https://s.lupacine.com/image/t/p/w500/2E7me3rPi8HqaeheuD86YlpNX6k.jpg",
          link: "detalles.html?type=movie&id=1201012",
          year: "2025",
          genres: ["Acción", "Comedia", "Romance"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 1035048,
          title: "Criaturas: Línea de extinción",
          image: "https://s.lupacine.com/image/t/p/w500/tnfc0NJ3BzhJrGJhkkEd6MHBdq5.jpg",
          link: "detalles.html?type=movie&id=1035048",
          year: "2024",
          genres: ["Acción", "Suspenso", "Ciencia ficción"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 1352774,
          title: "Piglet",
          image: "https://s.lupacine.com/image/t/p/w500/5wZNFUJAwyX6RCxdqrLO9lLWJ20.jpg",
          link: "detalles.html?type=movie&id=1352774",
          year: "2025",
          genres: ["Terror"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 1405338,
          title: "Oni-Goroshi: Ciudad de los demonios",
          image: "https://s.lupacine.com/image/t/p/w500/fQ9hzto0cUuxjfzqNAiAnNJo8O7.jpg",
          link: "detalles.html?type=movie&id=1405338",
          year: "2025",
          genres: ["Acción", "Crimen", "Fantasía", "Suspenso"] // <-- Asegúrate de que esto esté definido
      },
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

// Películas de acción (vacío)
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

// Películas de drama (vacío)
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

// Crear un objeto para almacenar las categorías de géneros
const genreCategories = {};

// Función para clasificar las películas por género
function classifyMoviesByGenre(movies) {
    movies.forEach(movie => {
        if (movie.genres) {
            movie.genres.forEach(genre => {
                if (!genreCategories[genre]) {
                    genreCategories[genre] = [];
                }
                genreCategories[genre].push(movie);
            });
        }
    });
}

// Clasificar las películas manuales, de acción, de drama y las ocultas
classifyMoviesByGenre(manualMovies);
classifyMoviesByGenre(accionMovies);
classifyMoviesByGenre(dramaMovies);
classifyMoviesByGenre(hiddenMovies); // Clasificar las películas ocultas por género

// Función para generar el contenido de la página principal
function generarContenido(container) {
    const continueWatchingMovies = getContinueWatchingMovies();
    const visibleCategories = {
        "Seguir viendo": continueWatchingMovies,
        "Recién Agregado": manualMovies.slice(-12).reverse(), // <- Últimas 10 películas, orden inverso
        "Acción": accionMovies,
        "Drama": dramaMovies,
        ...genreCategories
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

    // Configurar los botones de "Eliminar"
    setupRemoveButtons();
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

// Función para mostrar el modal de confirmación
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

// Configurar los botones de "Eliminar"
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

// Función para eliminar una película de "Seguir viendo"
function removeFromContinueWatching(movieId) {
    localStorage.removeItem(`progress_${movieId}`);
    showToast(`Película eliminada de "Seguir viendo"`, 'success');
    // Recargar la página para actualizar la lista
    setTimeout(() => {
        window.location.reload();
    }, 1000);
}

// Función para mostrar un toast (notificación)
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
        const allMovies = [...manualMovies, ...accionMovies, ...dramaMovies, ...hiddenMovies]; // Agrega más listas si es necesario

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

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    if (content) generarContenido(content);

    // Ocultar el loader después de cargar las películas manuales
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';

    // Configurar el buscador
    setupSearch();
});
