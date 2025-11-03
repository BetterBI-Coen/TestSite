// const carousel = document.getElementById("carousel");
// const track = document.getElementById("carousel-track");

// let isPaused = false;
// let direction = 1; // 1 = forward, -1 = backward
// let scrollAnimation;

// // Duplicate slides for smooth looping
// track.innerHTML += track.innerHTML;

// // Function to get current visible image width
// function getStep() {
//   const imgs = track.querySelectorAll("img");
//   if (imgs.length === 0) return 1;
//   return imgs[0].clientWidth + 16; // image width + gap
// }

// // Auto-scroll function
// function autoScroll() {
//   if (!isPaused) {
//     const step = getStep();
//     carousel.scrollLeft += step * 0.02 * direction; // scale speed

//     const maxScroll = track.scrollWidth / 2;

//     if (carousel.scrollLeft >= maxScroll) direction = -1;
//     if (carousel.scrollLeft <= 0) direction = 1;
//   }

//   scrollAnimation = requestAnimationFrame(autoScroll);
// }

// // Pause on user interaction
// ["mouseenter", "mousedown", "touchstart", "wheel"].forEach(evt => {
//   carousel.addEventListener(evt, () => (isPaused = true));
// });

// // Resume when user stops interacting
// ["mouseleave", "mouseup", "touchend"].forEach(evt => {
//   carousel.addEventListener(evt, () => (isPaused = false));
// });

// // Start animation
// autoScroll();

// // Recalculate step on window resize for responsiveness
// window.addEventListener("resize", () => {
//   // Optional: adjust scrollLeft to stay in sync
// });
