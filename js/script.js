"use strict";

const nav = document.querySelector(".nav");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

// const mediaQuery = window.matchMedia("(max-width: 650px)");

menuOpen.addEventListener("click", function () {
  nav.style.display = "flex";
  menuOpen.style.display = "none";
  menuClose.style.display = "flex";
});

menuClose.addEventListener("click", function () {
  nav.style.display = "none";
  menuOpen.style.display = "flex";
  menuClose.style.display = "none";
});

// if (!mediaQuery) {
//   nav.style.display = "flex";
// }
