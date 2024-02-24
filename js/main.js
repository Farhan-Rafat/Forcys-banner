document.querySelector('.hamburger').addEventListener('click', function() {
    const btnEl = document.querySelector(".header");
    btnEl.classList.toggle("open-nav");
});

document.querySelector('.has-sub-menu').addEventListener('click', function() {
    const btnEl = document.querySelector(".has-sub-menu");
    btnEl.classList.toggle("open");
});