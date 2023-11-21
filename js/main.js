let menu = document.querySelector(".container_header  .bx-menu");
let navBar = document.querySelector(".navBar");
menu.addEventListener("click", () => {
  navBar.classList.toggle("active");
  if (menu.classList.contains("bx-menu")) {
    menu.classList.replace("bx-menu", "bx-x");
  } else {
    menu.classList.replace("bx-x", "bx-menu");
  }
});

let container_header = document.querySelector(".container_header");
window.addEventListener("scroll", () => {
  container_header.classList.toggle("active", scrollY > 50);
});

let sections = document.querySelectorAll("section");
let navItem = document.querySelectorAll(".navItem");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if ((top > offset) & (top < offset + height)) {
      document
        .querySelector(".navItem a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navItem a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
};
// scroll to top
let scrollTop = document.querySelector(".scrollTop");
window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("active", scrollY > 100);
});
scrollTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// work
let worksBtnSpan = document.querySelectorAll(".worksBtn span");
worksBtnSpan.forEach(btn => {
  btn.addEventListener("click", () => {
    worksBtnSpan.forEach(removeActive => {
      removeActive.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

// var mixer = mixitup(".allBoxWork", {
//   selectors: {
//     target: ".work_Card",
//   },
//   animation: {
//     duration: 300,
//   },
// });

let work_Card = document.querySelectorAll(".work_Card");
let fullScreen = document.querySelector(".fullScreen");
let imgSmall = document.querySelector(".imgSmall ");
let fullScreenBx = document.querySelector(".fullScreen .bx-x");

work_Card.forEach(e => {
  e.addEventListener("click", () => {
    fullScreen.classList.add("active");
    document.querySelector(".imgSmall img").src = e
      .querySelector(".work_Card img")
      .getAttribute("src");
  });
});
fullScreenBx.addEventListener("click", () => {
  fullScreen.classList.remove("active");
});

// swiper
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
