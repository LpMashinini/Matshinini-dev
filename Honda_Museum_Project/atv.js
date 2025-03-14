
// feature and style scripts

const gamepad = document.querySelector(".fa-gauge-high");
const stopwatch = document.querySelector(".fa-bicycle");
const sprayCan = document.querySelector(".fa-gamepad");
const Control1 = document.querySelector(".Control");
const efficiency1 = document.querySelector(".Efficiency");
const exterior1 = document.querySelector(".Exterior");
const Control2 = document.querySelector(".Control1");
const efficiency2 = document.querySelector(".Efficiency1");
const exterior2 = document.querySelector(".Exterior1");

// image container script
const imgContainer = document.querySelector(".imgContainer");

gamepad.addEventListener("click", () => {
  // handling
  Control1.style.display = "block";
  Control2.style.display = "block";

  efficiency1.style.display = "none";
  efficiency2.style.display = "none";
  exterior1.style.display = "none";
  exterior2.style.display = "none";

  imgContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(27, 25, 25, 0.208)),url(/Matshinini-Front-end-developer/images/perform-atv.jpg)';
  imgContainer.style.backgroundSize = "cover"; 
  imgContainer.style.backgroundPosition = "center";

});

stopwatch.addEventListener("click", () => {
  // Performance
  efficiency1.style.display = "block";
  efficiency2.style.display = "block";

  Control1.style.display = "none";
  Control2.style.display = "none";
  exterior1.style.display = "none";
  exterior2.style.display = "none";

  imgContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(27, 25, 25, 0.208)),url(/Matshinini-Front-end-developer/images/design-atv.jpg)';
  imgContainer.style.backgroundSize = "cover"; 
  imgContainer.style.backgroundPosition = "center"
});

sprayCan.addEventListener("click", () => {
  // Design
  exterior1.style.display = "block";
  exterior2.style.display = "block";

  efficiency1.style.display = "none";
  efficiency2.style.display = "none";
  Control1.style.display = "none";
  Control2.style.display = "none";


  imgContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(27, 25, 25, 0.208)),url(/Matshinini-Front-end-developer/images/handle-atv.jpg)';
  imgContainer.style.backgroundSize = "cover"; 
  imgContainer.style.backgroundPosition = "center"
});
