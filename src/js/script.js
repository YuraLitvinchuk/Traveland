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

    spaceBetween: 10,

    freeMode: true,

    // breakpoints: {
    //     320:{
    //         spaceBetween:20,
    //     },
    // }
  });

  const burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu"),
    close = document.querySelector(".menu__close"),
    menuList = document.querySelector(".menu__list"),
    input = document.querySelector("#email"),
    home = document.querySelector(".homePage");

  //Burger
  burger.addEventListener("click", () => {
    menu.classList.add("active");
  });

  close.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  menuList.addEventListener("click", (event) => {
    if (event.target && event.target.matches("a")) {
      menu.classList.remove("active");
    }
  });

  //Lazy loading for animation
  new WOW().init();

  //Input validation
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  function validateEmail() {
    if (isEmailValid(input.value)) {
      input.style.borderColor = "green";
    } else {
      input.style.borderColor = "red";
    }
  }

  input.addEventListener("input", validateEmail);

  function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
  }

  //Homepage scroll
  home.addEventListener("click", () => {
    window.scrollTo(scrollY, 0);
  });

  window.addEventListener("scroll", () => {
    home.hidden = scrollY < document.documentElement.clientHeight;
  });
  
});
