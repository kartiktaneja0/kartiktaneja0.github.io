document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const fadeInSections = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.9) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', fadeInSections);

    fadeInSections();

    const parallax = () => {
        sections.forEach(section => {
            const scrollPosition = window.scrollY;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            const parallaxValue = (sectionTop - scrollPosition) * 0.5;

            section.style.backgroundPositionY = parallaxValue + 'px';
        });
    };

    window.addEventListener('scroll', parallax);
});
