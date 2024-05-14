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

    // Smooth scrolling
    const scrollLinks = document.querySelectorAll('nav ul li a');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Typing animation for the hero subtitle
    const subtitle = document.querySelector('.subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';

    let index = 0;
    function type() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    setTimeout(type, 1000);
});
