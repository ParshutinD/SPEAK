const our_psychologists_slider = new Swiper(".our-psychologists__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".our-psychologists__pagination",
    clickable: true,
  },

  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    1023: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

const topic = document.querySelectorAll(".our-psychologists__item");

for (let i = 0; i < topic.length; i++) {
  topic[i].addEventListener("click", function () {
    topic[i].classList.toggle("our-psychologists__item--active");
  });
}

const feedback_slider = new Swiper(".feedback-block__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".feedback-block__pagination",
    clickable: true,
  },

  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
