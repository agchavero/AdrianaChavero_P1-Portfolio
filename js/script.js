// preload background images
function preload_image(im_url) {
  let img = new Image();
  img.src = im_url;
}
preload_image("../media/images/gradients.png");
preload_image("../media/images/gradients1.png");
preload_image("../media/images/gradients2.png");
preload_image("../media/images/gradients3.png");
preload_image("../media/images/gradients4.png");
preload_image("../media/images/gradients5.png");
preload_image("../media/images/gradients6.png");
preload_image("../media/images/gradients7.png");
preload_image("../media/images/gradients8.png");
preload_image("../media/images/gradients9.png");
preload_image("../media/images/gradients10.png");
preload_image("../media/images/gradients11.png");
preload_image("../media/images/gradients12.png");
preload_image("../media/images/gradients13.png");
preload_image("../media/images/gradients14.png");
preload_image("../media/images/gradients15.png");
preload_image("../media/images/gradients16.png");



// circles following cursor code
// const cursor = document.querySelector("#cursor");
// const cursorBorder = document.querySelector("#cursor-border");
// const cursorPos = { x: 0, y: 0 };
// const cursorBorderPos = { x: 0, y: 0 };

// document.addEventListener("mousemove", (e) => {
//   cursorPos.x = e.clientX;
//   cursorPos.y = e.clientY;

//   cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
// });

// requestAnimationFrame(function loop() {
//   const easting = 8;
//   cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
//   cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

//   cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
//   requestAnimationFrame(loop);
// });

// document.querySelectorAll("[data-cursor]").forEach((item) => {
//   item.addEventListener("mouseover", (e) => {
//     if (item.dataset.cursor === "pointer") {
//       cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
//       cursorBorder.style.setProperty("--size", "30px");
//     }
//   });
//   item.addEventListener("mouseout", (e) => {
//     cursorBorder.style.backgroundColor = "unset";
//     cursorBorder.style.mixBlendMode = "unset";
//     cursorBorder.style.setProperty("--size", "50px");
//   });
// });

