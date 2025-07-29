// Configuración específica para Hisense VIDAA
const isHisenseTV = /VIDAA/i.test(navigator.userAgent);

function setupHisenseNavigation() {
    const sections = Array.from(document.querySelectorAll('[data-tv-section]'));
    let currentSectionIndex = 0;
    let currentItemIndex = 0;

    // Activar navegación por secciones
    document.addEventListener('keydown', (e) => {
        if (!isHisenseTV) return;

        const section = sections[currentSectionIndex];
        const items = section.querySelectorAll('[data-tv-focusable]');

        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                currentItemIndex = Math.max(0, currentItemIndex - 1);
                break;
            case 'ArrowDown':
                e.preventDefault();
                currentItemIndex = Math.min(items.length - 1, currentItemIndex + 1);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                currentSectionIndex = Math.max(0, currentSectionIndex - 1);
                currentItemIndex = 0;
                break;
            case 'ArrowRight':
                e.preventDefault();
                currentSectionIndex = Math.min(sections.length - 1, currentSectionIndex + 1);
                currentItemIndex = 0;
                break;
            case 'Enter':
                if (items[currentItemIndex]) items[currentItemIndex].click();
                break;
        }

        // Enfocar elemento actual
        if (items[currentItemIndex]) {
            items[currentItemIndex].focus();
            items[currentItemIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });

    // Inicializar
    if (sections.length > 0) {
        const firstItem = sections[0].querySelector('[data-tv-focusable]');
        if (firstItem) firstItem.focus();
    }
}

// Inicialización
if (isHisenseTV) {
    document.body.setAttribute('data-tv-mode', 'hisense');
    setupHisenseNavigation();
}