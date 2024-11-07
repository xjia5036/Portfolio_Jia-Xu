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



// type writing
const words = ["UI/UX", "Graphic Design", "Motion Design", "3D", "and more"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const dynamicTextElement = document.getElementById("dynamic-text");

function typeEffect() {
    let currentWord = words[wordIndex].slice(0, isDeleting ? --charIndex : ++charIndex);
    dynamicTextElement.textContent = currentWord;

    if (!isDeleting && charIndex === words[wordIndex].length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

typeEffect();

