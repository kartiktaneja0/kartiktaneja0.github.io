document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const fadeInSections = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', fadeInSections);

    fadeInSections();
});
