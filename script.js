document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".main-nav ul li a");

    function setActiveLink() {
        let current = window.location.hash;
        if (!current) return; // Si no hay hash, no hacer nada

        navLinks.forEach(link => {
            if (link.getAttribute("href") === current) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    setActiveLink(); // Ejecutar al cargar la página

    window.addEventListener("hashchange", setActiveLink); // Detectar cambios en el hash
});
