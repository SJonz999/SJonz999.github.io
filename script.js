let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', function() {
    changeSlide('next');
});

document.querySelector('.prev').addEventListener('click', function() {
    changeSlide('prev');
});

function changeSlide(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalSlides;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }
    
    updateSlidePosition();
}

function updateSlidePosition() {
    const offset = -currentIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Cambiar a la siguiente diapositiva cada 4 segundos
setInterval(function() {
    changeSlide('next');
}, 4000);
