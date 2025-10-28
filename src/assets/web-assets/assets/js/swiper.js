document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-products", {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        // Mobile devices
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        // Tablets
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1024: {
        // Laptops
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        // Larger screens
        slidesPerView: 6,
        spaceBetween: 30,
      },
      1920: {
        // Larger screens
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".likely-products", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".category-swiper", {
    slidesPerView: 5,
    // spaceBetween: 20,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// **Swiper Slider Initialization for Vertical Banner**
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".banner-vertical-slider", {
    direction: "vertical",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
