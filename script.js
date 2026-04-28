// Typed effect
var typed = new Typed('#typed', {
  strings: ['ENGINEERING THE FUTURE', 'MASTERING ALGORITHMS', 'BUILDING SOLUTIONS'],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// Particles
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 50 },
    "color": { "value": "#00ffcc" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.2 },
    "size": { "value": 2 },
    "line_linked": { "enable": true, "distance": 150, "color": "#00ffcc", "opacity": 0.1, "width": 1 },
    "move": { "enable": true, "speed": 1 }
  }
});

AOS.init();
