// tvNavigation.js
document.addEventListener('DOMContentLoaded', function() {
    // Detectar si estamos en un entorno de TV
    const isTV = window.matchMedia('(hover: none) and (pointer: coarse)').matches || 
                 navigator.userAgent.includes('TV') || 
                 navigator.userAgent.includes('SmartTV');
    
    document.body.setAttribute('data-tv-mode', isTV);
    
    if (isTV) {
        initTVNavigation();
    }
});

function initTVNavigation() {
    let currentFocusIndex = 0;
    const focusableElements = Array.from(document.querySelectorAll('[data-focusable]'));
    
    // Añadir clase de enfoque al primer elemento
    if (focusableElements.length > 0) {
        focusableElements[0].classList.add('focused');
    }
    
    // Manejar eventos de teclado
    document.addEventListener('keydown', function(e) {
        const focusedElement = document.querySelector('.focused');
        
        switch(e.key) {
            case 'ArrowUp':
                navigate('up');
                e.preventDefault();
                break;
            case 'ArrowDown':
                navigate('down');
                e.preventDefault();
                break;
            case 'ArrowLeft':
                navigate('left');
                e.preventDefault();
                break;
            case 'ArrowRight':
                navigate('right');
                e.preventDefault();
                break;
            case 'Enter':
            case ' ':
                if (focusedElement) {
                    focusedElement.click();
                }
                e.preventDefault();
                break;
            case 'Backspace':
                // Manejar botón de retroceso
                window.history.back();
                e.preventDefault();
                break;
        }
    });
    
    function navigate(direction) {
        const focusedElement = document.querySelector('.focused');
        if (!focusedElement) return;
        
        focusedElement.classList.remove('focused');
        
        // Lógica de navegación básica
        if (direction === 'right') {
            currentFocusIndex = (currentFocusIndex + 1) % focusableElements.length;
        } else if (direction === 'left') {
            currentFocusIndex = (currentFocusIndex - 1 + focusableElements.length) % focusableElements.length;
        } else if (direction === 'down') {
            // Implementar lógica para navegación vertical más inteligente
            currentFocusIndex = findNextElementBelow(currentFocusIndex);
        } else if (direction === 'up') {
            // Implementar lógica para navegación vertical más inteligente
            currentFocusIndex = findNextElementAbove(currentFocusIndex);
        }
        
        focusableElements[currentFocusIndex].classList.add('focused');
        focusableElements[currentFocusIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
    
    function findNextElementBelow(currentIndex) {
        // Implementación básica - mejorar según diseño
        const nextIndex = (currentIndex + 5) % focusableElements.length; // Saltar 5 elementos
        return nextIndex;
    }
    
    function findNextElementAbove(currentIndex) {
        // Implementación básica - mejorar según diseño
        const prevIndex = (currentIndex - 5 + focusableElements.length) % focusableElements.length;
        return prevIndex;
    }
}