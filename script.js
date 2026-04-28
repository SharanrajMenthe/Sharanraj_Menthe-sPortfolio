// Initialize Particles
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80 },
        "color": { "value": "#00f2ff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "line_linked": { "enable": true, "distance": 150, "color": "#00f2ff", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 3 }
    },
    "interactivity": { "events": { "onhover": { "enable": true, "mode": "repulse" } } }
});

// Initialize AOS (Animate on Scroll)
AOS.init({ duration: 1000, once: true });

// Typewriter Effect
const typingText = document.querySelector('.typing-text');
const words = ["Full Stack Developer", "AI Specialist", "MATLAB Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener('DOMContentLoaded', typeEffect);
