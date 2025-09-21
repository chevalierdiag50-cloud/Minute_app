document.addEventListener('DOMContentLoaded', () => {
    // ---- Animation des sections au défilement (code existant) ----
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // ---- NOUVEAU : Effet sur le header au défilement ----
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) { // Ajoute l'ombre si on a défilé de plus de 10 pixels
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
