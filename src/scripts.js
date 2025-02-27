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
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// // Slider functionality
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-advance slides every 5 seconds
setInterval(() => showSlide(currentSlide + 1), 5000);

$(document).ready(function () {
    $("#contactForm").submit(function (event) {
        event.preventDefault(); // Evitar la recarga de la página

        let formData = $(this).serialize(); // Serializa los datos del formulario
        console.log(formData); //
        $.ajax({
            type: "POST",
            url: "form.php",
            data: formData,
            dataType: "text",
            success: function (response) {
                $("#form-feedback").html('<p class="success-message">' + response + '</p>');
                $("#contactForm")[0].reset(); // Limpiar el formulario después de enviar
            },
            error: function (xhr, status, error) {
                $("#form-feedback").html('<p class="error-message">Error al enviar: ' + error + '</p>');
            }
        });
    });
});
