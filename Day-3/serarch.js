fetch('header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data)

fetch('footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data)

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});