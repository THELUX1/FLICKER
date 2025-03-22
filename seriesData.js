// Series manuales
const manualSeries = [
    {
        id: 194807,
        title: "Porno Y Helado",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/4BOfJlIY99rCrDFI2nR0ID6Isu8.jpg",
        link: "seriesDetalles.html?type=series&id=194807",
        year: "2022",
        genres: ["Comedia"]
    },
    {
        id: 2,
        title: "Serie 2",
        image: "https://via.placeholder.com/150",
        link: "seriesDetalles.html?type=series&id=2",
        year: "2024",
        genres: ["Comedia", "Romance"]
    },
    // Agrega más series aquí
];

// Series de acción
const accionSeries = [
    {
        id: 3,
        title: "Serie de Acción 1",
        image: "https://via.placeholder.com/150",
        link: "detalles.html?type=series&id=3",
        year: "2025",
        genres: ["Acción"]
    },
    // Agrega más series de acción aquí
];

// Series de drama
const dramaSeries = [
    {
        id: 4,
        title: "Serie de Drama 1",
        image: "https://via.placeholder.com/150",
        link: "detalles.html?type=series&id=4",
        year: "2025",
        genres: ["Drama"]
    },
    // Agrega más series de drama aquí
];

// Crear un objeto para almacenar las categorías de géneros
const genreCategories = {};

// Función para clasificar las series por género
function classifySeriesByGenre(series) {
    series.forEach(serie => {
        if (serie.genres) {
            serie.genres.forEach(genre => {
                if (!genreCategories[genre]) {
                    genreCategories[genre] = [];
                }
                genreCategories[genre].push(serie);
            });
        }
    });
}

// Clasificar las series manuales, de acción, de drama
classifySeriesByGenre(manualSeries);
classifySeriesByGenre(accionSeries);
classifySeriesByGenre(dramaSeries);

// Función para generar el contenido de la página principal
function generarContenido(container) {
    const continueWatchingSeries = getContinueWatchingSeries();
    const visibleCategories = {
        "Seguir viendo": continueWatchingSeries,
        "Recién Agregado": manualSeries, // Solo mostrar series manuales aquí
        "Acción": accionSeries,
        "Drama": dramaSeries,
        ...genreCategories // Agregar las categorías de géneros
    };

    container.innerHTML = Object.entries(visibleCategories).map(([category, series]) => {
        if (series.length === 0) return ''; // No mostrar categorías vacías
        return `
            <section class="movie-section">
                <h2 class="section-title">${category}</h2>
                <div class="movies-container">
                    ${series.map(serie => createSeriesCard(serie)).join('')}
                </div>
            </section>
        `;
    }).join('');

    // Configurar los botones de "Eliminar"
    setupRemoveButtons();
}

// Función para obtener las series que el usuario está viendo
function getContinueWatchingSeries() {
    const continueWatching = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("progress_")) {
            const serieId = key.split("_")[1];
            const progress = localStorage.getItem(key);
            const serie = manualSeries.find(s => s.id == serieId) || 
                          accionSeries.find(s => s.id == serieId) ||
                          dramaSeries.find(s => s.id == serieId);
            if (serie) {
                continueWatching.push({
                    ...serie,
                    progress: parseFloat(progress)
                });
            }
        }
    }
    return continueWatching;
}

// Función para crear una tarjeta de serie
function createSeriesCard(serie) {
    const progress = serie.progress ? `<div class="progress-bar"><div class="progress" style="width: ${(serie.progress / serie.duration) * 100}%"></div></div>` : '';
    const removeButton = serie.progress ? `
        <button class="remove-button" data-serie-id="${serie.id}">
            <i class="fas fa-trash"></i> <!-- Ícono de papelera -->
        </button>
    ` : '';

    return `
        <div class="movie-card">
            <a href="${serie.link}">
                <img src="${serie.image}" alt="${serie.title}">
                <div class="movie-title">${serie.title}</div>
                ${serie.year ? `<div class="movie-year">${serie.year}</div>` : ''}
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
            const serieId = button.getAttribute('data-serie-id');
            const serieTitle = manualSeries.find(s => s.id == serieId)?.title || "esta serie";

            // Mostrar el modal de confirmación
            showConfirmModal(serieTitle, (confirmed) => {
                if (confirmed) {
                    removeFromContinueWatching(serieId);
                }
            });
        });
    });
}

// Función para eliminar una serie de "Seguir viendo"
function removeFromContinueWatching(serieId) {
    localStorage.removeItem(`progress_${serieId}`);
    showToast(`Serie eliminada de "Seguir viendo"`, 'success');
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
            const results = searchSeries(query);
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

    function searchSeries(query) {
        const normalizedQuery = query
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
            .toLowerCase();

        // Combinar todas las listas de series que quieras buscar
        const allSeries = [...manualSeries, ...accionSeries, ...dramaSeries]; // Agrega más listas si es necesario

        const seenTitles = new Set();
        const uniqueSeries = [];

        allSeries.forEach(serie => {
            if (!seenTitles.has(serie.title)) {
                seenTitles.add(serie.title);
                uniqueSeries.push(serie);
            }
        });

        return uniqueSeries.filter(serie => {
            const normalizedTitle = serie.title
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .toLowerCase();

            return normalizedTitle.includes(normalizedQuery) ||
                   serie.year?.toString().includes(query);
        });
    }

    function displayResults(results) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No se encontraron resultados</div>';
            searchResults.style.display = 'block';
            return;
        }

        results.forEach(serie => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            item.innerHTML = `
                <img src="${serie.image}" alt="${serie.title}">
                <div class="search-result-info">
                    <h3>${serie.title}</h3>
                    ${serie.year ? `<p>${serie.year}</p>` : ''}
                </div>
            `;
            item.addEventListener('click', () => {
                window.location.href = serie.link;
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

    // Ocultar el loader después de cargar las series manuales
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';

    // Configurar el buscador
    setupSearch();
});
