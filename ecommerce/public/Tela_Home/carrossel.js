document.addEventListener("DOMContentLoaded", function () {
    let slidesContainer = document.getElementById("slides1");
    let slides = slidesContainer.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slidesContainer.scrollLeft = slides[index].offsetLeft;
    }

    document.querySelector(".btnAnterior").addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    document.querySelector(".btnProximo").addEventListener("click", function () {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});
