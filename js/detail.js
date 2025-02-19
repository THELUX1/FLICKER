// Datos de las películas
const movieDetails = {
    "Interestelar": {
        title: "Interestelar",
        year: "2014",
        rating: "8.6/10",
        duration: "2h 49m",
        synopsis: "Un grupo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
        cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
        backdrop: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/LYS2O1nl9iM"
    },
    "El Padrino": {
        title: "El Padrino",
        year: "1972",
        rating: "9.2/10",
        duration: "2h 55m",
        synopsis: "La saga de la familia Corleone, una poderosa dinastía de la mafia italiana en Nueva York.",
        cast: "Marlon Brando, Al Pacino, James Caan",
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        backdrop: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/sY1S34973zA"
    },
    "El Señor de los Anillos: La Comunidad del Anillo": {
        title: "El Señor de los Anillos: La Comunidad del Anillo",
        year: "2001",
        rating: "8.8/10",
        duration: "2h 58m",
        synopsis: "Un hobbit llamado Frodo emprende un viaje para destruir un anillo mágico y salvar la Tierra Media de la oscuridad.",
        cast: "Elijah Wood, Ian McKellen, Viggo Mortensen",
        poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        backdrop: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/V75dMMIW2B4"
    },
    "Harry Potter y la Piedra Filosofal": {
        title: "Harry Potter y la Piedra Filosofal",
        year: "2001",
        rating: "7.6/10",
        duration: "2h 32m",
        synopsis: "Un joven mago descubre su herencia mágica y comienza su entrenamiento en la escuela de magia Hogwarts.",
        cast: "Daniel Radcliffe, Emma Watson, Rupert Grint",
        poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_FMjpg_UX1000_.jpg",
        backdrop: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/VyHV0BRtdxo"
    },
    "El Caballero de la Noche": {
        title: "El Caballero de la Noche",
        year: "2008",
        rating: "9.0/10",
        duration: "2h 32m",
        synopsis: "Batman se enfrenta al Joker, un criminal psicópata que amenaza con sumir Gotham City en el caos.",
        cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
        backdrop: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    "Titanic": {
        title: "Titanic",
        year: "1997",
        rating: "7.8/10",
        duration: "3h 14m",
        synopsis: "Una joven de clase alta y un artista pobre se enamoran a bordo del famoso y desafortunado RMS Titanic.",
        cast: "Leonardo DiCaprio, Kate Winslet, Billy Zane",
        poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        backdrop: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/2e-eXJ6HgkQ"
    },
    "Forrest Gump": {
        title: "Forrest Gump",
        year: "1994",
        rating: "8.8/10",
        duration: "2h 22m",
        synopsis: "La vida de Forrest Gump, un hombre con un coeficiente intelectual bajo pero con un corazón enorme, que vive eventos históricos en los Estados Unidos.",
        cast: "Tom Hanks, Robin Wright, Gary Sinise",
        poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        backdrop: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/bLvqoHBptjg"
    },
    "Inception": {
        title: "Inception",
        year: "2010",
        rating: "8.8/10",
        duration: "2h 28m",
        synopsis: "Un ladrón que roba secretos corporativos a través del uso de la tecnología de sueños compartidos es contratado para implantar una idea en la mente de un CEO.",
        cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
        backdrop: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    "Pulp Fiction": {
        title: "Pulp Fiction",
        year: "1994",
        rating: "8.9/10",
        duration: "2h 34m",
        synopsis: "Las vidas de dos asesinos a sueldo, un boxeador y una pareja de bandidos se entrelazan en una historia de violencia y redención.",
        cast: "John Travolta, Uma Thurman, Samuel L. Jackson",
        poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        backdrop: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY"
    },
    "Gladiator": {
        title: "Gladiator",
        year: "2000",
        rating: "8.5/10",
        duration: "2h 35m",
        synopsis: "Un general romano traicionado busca venganza contra el corrupto emperador que asesinó a su familia y lo envió a la esclavitud.",
        cast: "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
        poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        backdrop: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/owK1qxDselE"
    }, 
    "John Wick": {
    title: "John Wick",
    year: "2014",
    rating: "7.4/10",
    duration: "1h 41m",
    synopsis: "Un exasesino retirado regresa a la acción cuando un mafioso roba su coche y mata a su perro, un regalo póstumo de su difunta esposa.",
    cast: "Keanu Reeves, Michael Nyqvist, Alfie Allen",
    poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg",
    backdrop: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/embed/2AUmvWm5ZDQ"
}, 
"Mad Max: Fury Road": {
    title: "Mad Max: Fury Road",
    year: "2015",
    rating: "8.1/10",
    duration: "2h",
    synopsis: "En un mundo postapocalíptico, Max se une a Furiosa, una rebelde que intenta escapar de un tirano con un grupo de mujeres secuestradas.",
    cast: "Tom Hardy, Charlize Theron, Nicholas Hoult",
    poster: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    backdrop: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/embed/hEJnMQG9ev8"
}, 
"Cadena Perpetua": {
        title: "Cadena Perpetua",
        year: "1994",
        rating: "9.3/10",
        duration: "2h 22m",
        synopsis: "Un banquero condenado a cadena perpetua...",
        cast: "Tim Robbins, Morgan Freeman",
        poster: "https://pics.filmaffinity.com/Cadena_perpetua-187366518-large.jpg", // URL del póster
        backdrop: "https://pics.filmaffinity.com/Cadena_perpetua-187366518-large.jpg", // URL del fondo
        trailer: "https://www.youtube.com/embed/xB4nJg0fyE0" // URL del tráiler
    },
    "Nosferatu": {
        title: "Nosferatu",
        year: "1922",
        rating: "8.1/10",
        duration: "1h 34m",
        synopsis: "Una película clásica de terror...",
        cast: "Max Schreck, Gustav von Wangenheim",
        poster: "https://pics.filmaffinity.com/Nosferatu-417207191-large.jpg", // URL del póster
        backdrop: "https://pics.filmaffinity.com/Nosferatu-417207191-large.jpg", // URL del fondo
        trailer: "https://www.youtube.com/embed/iEbp8QMGzP0" // URL del tráiler
    },
    "Gladiator II": {
        title: "Gladiator II",
        year: "2024",
        rating: "N/A",
        duration: "N/A",
        synopsis: "Secuela de la película Gladiator...",
        cast: "Paul Mescal, Denzel Washington",
        poster: "https://pics.filmaffinity.com/Gladiator_II-152686913-large.jpg", // URL del póster
        backdrop: "https://pics.filmaffinity.com/Gladiator_II-152686913-large.jpg", // URL del fondo
        trailer: "https://www.youtube.com/embed/ZEJgVq1K8S4" // URL del tráiler
    }
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

// Mostrar toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000); // El toast desaparece después de 3 segundos
}

// Marcar película como "Me gusta"
function markAsLiked(movie) {
    const likedMovies = loadLikedMovies();
    if (!likedMovies.some(m => m.title === movie.title)) {
        likedMovies.unshift(movie);
        saveLikedMovies(likedMovies);
        showToast(`${movie.title} ha sido añadida a Me gusta.`);
    } else {
        showToast(`${movie.title} ya está en tu lista de Me gusta.`);
    }
}

// Configuración inicial
document.addEventListener('DOMContentLoaded', () => {
    setupMenu();
    loadMovie();

    // Marcar película como "Me gusta" desde la página de detalles
    document.getElementById('mark-watched-detail')?.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado del botón
        const params = new URLSearchParams(window.location.search);
        const movieTitle = decodeURIComponent(params.get('title'));
        const movie = movieDetails[movieTitle];

        if (movie) {
            const movieToAdd = {
                title: movie.title,
                image: movie.poster,
                link: window.location.href
            };
            markAsLiked(movieToAdd);
        }
    });
});

// Configurar el menú hamburguesa
function setupMenu() {
    const menuBtn = document.querySelector('.menu-hamburguesa');
    const navMenu = document.querySelector('.nav-menu');
    const closeBtn = document.querySelector('.close-menu');

    if (menuBtn && navMenu && closeBtn) {
        menuBtn.addEventListener('click', () => navMenu.classList.add('active'));
        closeBtn.addEventListener('click', () => navMenu.classList.remove('active'));
    }
}

// Cargar los detalles de la película
function loadMovie() {
    const params = new URLSearchParams(window.location.search);
    const movieTitle = decodeURIComponent(params.get('title'));
    
    if (!movieDetails[movieTitle]) {
        window.location.href = 'index.html';
        return;
    }

    const movie = movieDetails[movieTitle];
    const trailerParams = new URLSearchParams({
        modestbranding: '1',
        rel: '0',
        showinfo: '0',
        controls: '1',
        fs: '1'
    });

    // Configurar elementos
    document.title = `${movie.title} - CineStream`;
    document.querySelector('.movie-backdrop').style.backgroundImage = `url(${movie.backdrop})`; // Usar backdrop como fondo
    document.querySelector('.movie-poster').src = movie.poster;
    document.querySelector('.movie-trailer').src = `${movie.trailer}?${trailerParams}`;
    document.querySelector('.movie-title-detail').textContent = movie.title;
    document.querySelector('.movie-year').textContent = movie.year;
    document.querySelector('.movie-rating').textContent = movie.rating;
    document.querySelector('.movie-duration').textContent = movie.duration;
    document.querySelector('.movie-synopsis').textContent = movie.synopsis;
}