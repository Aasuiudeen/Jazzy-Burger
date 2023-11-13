const hamburger = document.querySelector(".hamburger");
const aside = document.querySelector(".side-bar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  aside.classList.toggle("open-side-bar");
});

const imgFloat = document.querySelector(".img-float");
const imgPri = document.querySelector(".img-pri");

window.addEventListener("DOMContentLoaded", () => {
  imgFloat.classList.add("open-img-float");
  imgPri.classList.add("open-img-pri");
});

const tog1 = document.querySelector(".tog-1");
const tog2 = document.querySelector(".tog-2");
const tog3 = document.querySelector(".tog-3");
const hero = document.querySelector(".hero");
const sMiddle = document.querySelector(".s-middle");

tog1.addEventListener("click", function () {
  hero.classList.toggle("open-hero-1");
});
tog2.addEventListener("click", function () {
  hero.classList.toggle("open-hero-2");
  sMiddle.classList.toggle("open-s-middle");
});
tog3.addEventListener("click", function () {
  hero.classList.toggle("open-hero");
});
