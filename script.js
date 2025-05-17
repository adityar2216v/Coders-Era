// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// Initialize Typed.js for typewriter effect
new Typed('#typewriter', {
    strings: ['Where Coding Dreams Come True', 'Join Our Developer Community', 'Learn, Share, and Grow Together'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Event Carousel
const eventSlider = document.getElementById('eventSlider');
const eventDots = document.querySelectorAll('.event-dot');
let currentSlide = 0;
const slideCount = eventDots.length;

function updateSlider() {
    eventSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
    eventDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

eventDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

function autoSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
}

setInterval(autoSlide, 3000); // Change slide every 3 seconds