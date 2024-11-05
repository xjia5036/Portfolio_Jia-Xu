// for scroll nav bar
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        // Show navbar when scrolling occurs
        navbar.style.display = 'block';

        // Hide navbar when at the top or bottom of the page
        if (scrollY === 0 || scrollY + windowHeight >= documentHeight) {
            navbar.style.display = 'none';
        }
    });
});



// header scroll down to show
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.style.position = 'fixed';
                header.style.zIndex = '1';
            } else {
                header.style.position = 'relative';
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    observer.observe(header);
});



/* contact form require function */

// Example of Bootstrap validation
(function () {
    'use strict'
    var forms = document.querySelectorAll('form')
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()