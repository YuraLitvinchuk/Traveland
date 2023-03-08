window.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // // And if we need scrollbar
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    grabCursor: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    slidesPerView: 1,

    freeMode: true,

    // breakpoints: {
    //     320:{
    //         slidesPerView:5,
    //     },
    // }
  });
});
