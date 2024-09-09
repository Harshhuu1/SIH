const sliderContainer = document.querySelector('.card-slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

const cards = document.querySelectorAll('.card');

function updateSlider() {
    const translateXValue = -currentIndex * (cards[0].clientWidth + 30); // 30 is the total margin on each side
    sliderContainer.style.transform = `translateX(${translateXValue}px)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});
