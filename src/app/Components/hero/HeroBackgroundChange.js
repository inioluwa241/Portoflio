"use client";
export const imgArr = [
  "/imgs/hero-images/nature.webp",
  "/imgs/hero-images/city.webp",
  "/imgs/hero-images/dark_city.jpg",
  "/imgs/hero-images/red_hill.jpg",
  "/imgs/hero-images/black_hole.jpg",
  "/imgs/hero-images/blue.jpg",
  "/imgs/hero-images/moutain.jpg",
  "/imgs/hero-images/sky.avif",
  "/imgs/hero-images/sun_hill.jpg",
];

// const displayImgFunc = function () {
//   document.querySelector(
//     ".hero"
//   ).style.background = `url(${imgArr[randNum]}) no-repeat center center/cover `;
// };

export let inter;
export let intervalId;
// export let connection =
// navigator.connection || navigator.mozConnection || navigator.webkitConnection;

export function startBackgroundRotation(setBgImage, heroBgChange) {
  inter = setInterval(() => {
    const randNum = Math.floor(Math.random() * (imgArr.length - 1));
    console.log(randNum);
    console.log(imgArr[randNum]);
    setBgImage(`url("${heroBgChange.imgArr[randNum]}") no-repeat center
    center/cover`);
  }, 5000);
}

export function stopBackgroundRotation() {
  clearInterval(inter);
}

// Initial load based on network conditions
// export function checkNetworkAndUpdateBackground() {
//   if (
//     connection &&
//     (connection.effectiveType === "slow-2g" ||
//       connection.effectiveType === "2g")
//   ) {
//     // stopBackgroundRotation();
//     console.log("stopped");
//     console.log(connection.effectiveType);
//   } else {
//     // startBackgroundRotation();
//     console.log("started");
//     // console.log(connection.effectiveType);
//   }
// }

// Event listener for network changes
// if (connection) {
//   connection.addEventListener("change", checkNetworkAndUpdateBackground);
// }

// Run initial check
// checkNetworkAndUpdateBackground();

// export function isImageSlow(url, callback) {
//   let img = new Image();
//   let startTime = new Date().getTime();

//   img.onload = () => {
//     let duration = new Date().getTime() - startTime;
//     callback(duration > 2000); // 2 seconds threshold for slow load
//   };
//   img.onerror = () => callback(true);
//   img.src = url + "?t=" + new Date().getTime(); // Prevent caching
// }

// Example usage
// isImageSlow("./images/nature.webp", (isSlow) => {
//   //   if (isSlow) stopBackgroundRotation();
//   //   else startBackgroundRotation();
// });
