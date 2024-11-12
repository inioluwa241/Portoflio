"use strict";
const navList = Array.from(document.querySelectorAll("nav ul li"));

const navUl = document.querySelector("nav ul");
const navUlWidth = navUl.getBoundingClientRect().width;
const viewPortWidth = window.innerWidth;

if (navUlWidth >= viewPortWidth) {
  navList.forEach((each) => {
    each.classList.add("modified");
  });
}

const imgArr = [
  "./images/nature.webp",
  "./images/city.webp",
  "./images/hero-image.jpg",
  "./images/hero-img.jpg",
  "./images/swirl.webp",
];

const displayImgFunc = function () {
  const randNum = Math.round(Math.random() * 4);
  console.log(randNum);
  console.log(imgArr[randNum]);
  console.log("yam");
  document.querySelector(
    ".hero"
  ).style.background = `url(${imgArr[randNum]}) no-repeat center center/cover `;
};

const inter = setInterval(displayImgFunc, 5000);

// clearInterval(inter);
