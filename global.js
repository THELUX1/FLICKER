// Soporte para navegación con control remoto (TV, Chromecast, etc.)
let currentFocusedElement = null;

function setupTVRemoteNavigation() {
    // Manejador de teclas del control remoto
    document.addEventListener('keydown', (e) => {
        const focusableElements = getFocusableElements();
        
        switch (e.key) {
            case 'ArrowUp':
                e.preventDefault();
                navigate('up', focusableElements);
                break;
            case 'ArrowDown':
                e.preventDefault();
                navigate('down', focusableElements);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                navigate('left', focusableElements);
                break;
            case 'ArrowRight':
                e.preventDefault();
                navigate('right', focusableElements);
                break;
            case 'Enter':
                if (currentFocusedElement) {
                    currentFocusedElement.click();
                    // Efecto visual para feedback
                    currentFocusedElement.classList.add('active');
                    setTimeout(() => {
                        currentFocusedElement.classList.remove('active');
                    }, 200);
                }
                break;
            case 'Backspace':
                handleBackButton();
                break;
        }
    });

    // Auto-enfocar el primer elemento al cargar
    if (document.querySelector('[autofocus]')) {
        currentFocusedElement = document.querySelector('[autofocus]');
        currentFocusedElement.focus();
    }
}

function getFocusableElements() {
    return Array.from(document.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex="0"], input, select, textarea, [data-focusable]'
    )).filter(el => {
        return !el.hidden && 
               el.getAttribute('aria-disabled') !== 'true' &&
               getComputedStyle(el).display !== 'none';
    });
}

function navigate(direction, elements) {
    if (elements.length === 0) return;

    if (!currentFocusedElement) {
        currentFocusedElement = elements[0];
        currentFocusedElement.focus();
        return;
    }

    const currentIndex = elements.indexOf(currentFocusedElement);
    let nextIndex = 0;

    switch (direction) {
        case 'up':
            nextIndex = findNextFocusableIndex(elements, currentIndex, -1, 'vertical');
            break;
        case 'down':
            nextIndex = findNextFocusableIndex(elements, currentIndex, 1, 'vertical');
            break;
        case 'left':
            nextIndex = findNextFocusableIndex(elements, currentIndex, -1, 'horizontal');
            break;
        case 'right':
            nextIndex = findNextFocusableIndex(elements, currentIndex, 1, 'horizontal');
            break;
    }

    currentFocusedElement = elements[nextIndex];
    currentFocusedElement.focus();
    currentFocusedElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center',
        inline: 'center'
    });
}

function findNextFocusableIndex(elements, currentIndex, step, axis) {
    const currentRect = elements[currentIndex].getBoundingClientRect();
    let nextIndex = currentIndex + step;

    // Búsqueda inteligente basada en posición (para layouts complejos)
    while (nextIndex >= 0 && nextIndex < elements.length) {
        const nextRect = elements[nextIndex].getBoundingClientRect();
        
        const isInSameAxis = axis === 'vertical' 
            ? Math.abs(nextRect.left - currentRect.left) < 20
            : Math.abs(nextRect.top - currentRect.top) < 20;

        if (isInSameAxis) return nextIndex;
        nextIndex += step;
    }

    // Fallback: comportamiento estándar
    return Math.max(0, Math.min(elements.length - 1, currentIndex + step));
}

// Función para manejar el botón "atrás" (mejorada)
function setupBackButton() {
    // Agregar una entrada al historial de navegación para la página principal
    if (!window.history.state || window.history.state.page !== "main") {
        window.history.pushState({ page: "main" }, "", "index.html");
    }

    // Manejar el evento de retroceso
    window.onpopstate = function (event) {
        if (event.state && event.state.page === "main") {
            // Redirigir a la página principal con animación
            document.body.classList.add('page-exit-animation');
            setTimeout(() => {
                window.location.href = "index.html";
            }, 300);
        } else {
            window.history.back();
        }
    };
}

// Inicialización completa
document.addEventListener("DOMContentLoaded", function () {
    // Configurar navegación para TV (excepto en reproductor)
    if (!window.location.pathname.includes("Reproductor.html")) {
        setupTVRemoteNavigation();
    }

    // Configurar botón "atrás" (excepto en página principal)
    if (window.location.pathname !== "/index.html" && window.location.pathname !== "/") {
        setupBackButton();
    }

    // Mejorar accesibilidad para TV
    document.body.setAttribute('data-tv-mode', 'true');
});