"use strict";
const navList = Array.from(document.querySelectorAll("nav ul li"));

const navUl = document.querySelector("nav ul");
const navUlWidth = navUl.getBoundingClientRect().width;
const viewPortWidth = window.innerWidth;

if (navUlWidth >= viewPortWidth) {
  navList.forEach((each, i) => {
    each.classList.add("modified");
  });
  navList[0].style.transform = "translateX(-10px)";
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
  document.querySelector(
    ".hero"
  ).style.background = `url(${imgArr[randNum]}) no-repeat center center/cover `;
};

let inter;
let intervalId;
let connection =
  navigator.connection || navigator.mozConnection || navigator.webkitConnection;

function startBackgroundRotation() {
  inter = setInterval(displayImgFunc, 5000);
}

function stopBackgroundRotation() {
  clearInterval(inter);
  //   document.body.style.backgroundImage = "url('static-background.jpg')"; // Set static background
}

// Initial load based on network conditions
function checkNetworkAndUpdateBackground() {
  if (
    connection &&
    (connection.effectiveType === "slow-2g" ||
      connection.effectiveType === "2g")
  ) {
    stopBackgroundRotation();
    console.log("stopped");
    console.log(connection.effectiveType);
  } else {
    startBackgroundRotation();
    console.log("started");
    console.log(connection.effectiveType);
  }
}

// Event listener for network changes
if (connection) {
  connection.addEventListener("change", checkNetworkAndUpdateBackground);
}

// Run initial check
checkNetworkAndUpdateBackground();

function isImageSlow(url, callback) {
  let img = new Image();
  let startTime = new Date().getTime();

  img.onload = () => {
    let duration = new Date().getTime() - startTime;
    callback(duration > 2000); // 2 seconds threshold for slow load
  };
  img.onerror = () => callback(true);
  img.src = url + "?t=" + new Date().getTime(); // Prevent caching
}

// Example usage
isImageSlow("./images/nature.webp", (isSlow) => {
  if (isSlow) stopBackgroundRotation();
  else startBackgroundRotation();
});
