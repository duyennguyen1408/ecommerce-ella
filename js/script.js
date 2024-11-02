import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import Pagination from "https://cdn.jsdelivr.net/npm/swiper@11/modules/pagination.min.mjs";
import Autoplay from "https://cdn.jsdelivr.net/npm/swiper@11/modules/autoplay.min.mjs";

const swiper = new Swiper(".swiper-container", {
    modules: [Pagination],

    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

const nextButton = document.getElementById("custom-next");
const prevButton = document.getElementById("custom-prev");

nextButton.addEventListener("click", () => {
    swiper.slideNext();
});

prevButton.addEventListener("click", () => {
    swiper.slidePrev();
});

document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.getElementById("toggler");
    const navContainer = document.querySelector(".nav-container");

    function toggleNavbar() {
        if (window.innerWidth <= 991) {
            navContainer.style.display = toggler.checked ? "block" : "none";
        }
    }

    navContainer.style.display = window.innerWidth > 991 ? "block" : "none";

    toggler.addEventListener("change", toggleNavbar);

    window.addEventListener("resize", () => {
        navContainer.style.display = window.innerWidth > 991 ? "block" : "none";
        toggler.checked = false;
    });
});
