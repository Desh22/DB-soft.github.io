// Función para detectar cuándo una sección está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Agregar clase 'visible' a las secciones en el viewport y 'hidden' al salir
function checkSectionsVisibility() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
            section.classList.remove('hidden');
        } else {
            section.classList.remove('visible');
            section.classList.add('hidden');
        }
    });
}

// Ejecutar la función al cargar y al hacer scroll
window.addEventListener('scroll', checkSectionsVisibility);
window.addEventListener('load', checkSectionsVisibility);
