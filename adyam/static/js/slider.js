document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById('news-slider');
    const dotsContainer = document.getElementById('slider-dots');

    const slideWidth = () => slider?.firstElementChild?.offsetWidth + 16; // 16 = space-x-4
    const numSlides = slider?.children?.length || 0;
    const visibleSlides = Math.floor(slider.offsetWidth / slideWidth());
    const totalDots = Math.max(1, numSlides - visibleSlides + 1);

    // Create dots
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('button');
        dot.className = "w-4 h-4 rounded-full bg-sky-900 border-2 border-sky-900 transition-colors duration-300 focus:outline-none";
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);

        dot.addEventListener('click', () => {
        clearInterval(autoSlideInterval); // pause auto-slide on manual click
        currentIndex = i;
        scrollToSlide(i);
        restartAutoSlide();
        });
    }

    const dots = dotsContainer.querySelectorAll("button");
    let currentIndex = 0;

    function scrollToSlide(index) {
        slider.scrollTo({ left: index * slideWidth(), behavior: 'smooth' });
        updateDots(index);
    }

    function updateDots(index) {
        dots.forEach((dot, idx) => {
        dot.classList.toggle("bg-sky-900", idx === index);
        });
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalDots;
        scrollToSlide(currentIndex);
    }

    // Auto-slide every 10 seconds
    let autoSlideInterval = setInterval(autoSlide, 10000);

    function restartAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 10000);
    }

    slider.addEventListener("scroll", () => {
        const index = Math.round(slider.scrollLeft / slideWidth());
        currentIndex = index;
        updateDots(index);
    });

    // Initial dot state
    updateDots(0);
});