// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon'); // Ícono del menú
    const navLinks = document.querySelector('.nav-links'); // Menú móvil

    // Alternar la clase "active" en el menú móvil
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar el menú cuando se hace clic en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});





// Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Form submission (you would typically send this to a server)
// const form = document.querySelector('.contact-form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
//     form.submit();
//     form.reset();
// });

// // Slider functionality
// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// let currentSlide = 0;

// function showSlide(index) {
//     if (index < 0) {
//         currentSlide = slides.length - 1;
//     } else if (index >= slides.length) {
//         currentSlide = 0;
//     } else {
//         currentSlide = index;
//     }
//     slider.style.transform = `translateX(-${currentSlide * 100}%)`;
// }

// prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
// nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

// // Auto-advance slides every 5 seconds
// setInterval(() => showSlide(currentSlide + 1), 5000);

