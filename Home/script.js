const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.card');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
const cardsToShow = 3;
const cardWidth = cards[0].offsetWidth + 20; // include margin

nextBtn.addEventListener('click', () => {
  const maxIndex = cards.length - cardsToShow;

  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
