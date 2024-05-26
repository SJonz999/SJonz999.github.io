let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const totalSlides = slides.length;
const dotsContainer = document.querySelector('.dots');

// Crear los puntitos de navegación
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => changeSlide(i));
    dotsContainer.appendChild(dot);
}

document.querySelector('.next').addEventListener('click', function() {
    changeSlide('next');
});

document.querySelector('.prev').addEventListener('click', function() {
    changeSlide('prev');
});

function changeSlide(directionOrIndex) {
    if (typeof directionOrIndex === 'string') {
        if (directionOrIndex === 'next') {
            currentIndex = (currentIndex + 1) % totalSlides;
        } else if (directionOrIndex === 'prev') {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        }
    } else {
        currentIndex = directionOrIndex;
    }
    
    updateSlidePosition();
    updateDots();
}

function updateSlidePosition() {
    const offset = -currentIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Cambiar a la siguiente diapositiva cada 4 segundos
setInterval(function() {
    changeSlide('next');
}, 4000);

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inicializar los puntitos
updateDots();
