const gamepad = document.querySelector(".fa-gauge");
const stopwatch = document.querySelector(".fa-gamepad");
const sprayCan = document.querySelector(".fa-bicycle");
const Control1 = document.querySelector(".Control");
const efficiency1 = document.querySelector(".Efficiency");
const exterior1 = document.querySelector(".Exterior");
const Control2 = document.querySelector(".Control1");
const efficiency2 = document.querySelector(".Efficiency1");
const exterior2 = document.querySelector(".Exterior1");
const imgContainer = document.querySelector(".imgContainer");
const color1 = document.querySelector("#white");
const color2 = document.querySelector("#black");
const imgBike = document.querySelector("#imgBike");
const textColor = document.querySelector(".textColor");


gamepad.addEventListener("click", () => {
  Control1.style.display = "block";
  Control2.style.display = "block";

  efficiency1.style.display = "none";
  efficiency2.style.display = "none";
  exterior1.style.display = "none";
  exterior2.style.display = "none";

  imgContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(27, 25, 25, 0.208)),url(images/moto1.avif)';
  imgContainer.style.backgroundSize = "cover"; 
  imgContainer.style.backgroundPosition = "center"
});

stopwatch.addEventListener("click", () => {
  efficiency1.style.display = "block";
  efficiency2.style.display = "block";

  Control1.style.display = "none";
  Control2.style.display = "none";
  exterior1.style.display = "none";
  exterior2.style.display = "none";

  imgContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(27, 25, 25, 0.208)),url(images/moto-wheel.jpg)';
  imgContainer.style.backgroundSize = "cover"; 
  imgContainer.style.backgroundPosition = "center"
});

sprayCan.addEventListener("click", () => {
  exterior1.style.display = "block";
  exterior2.style.display = "block";

  efficiency1.style.display = "none";
  efficiency2.style.display = "none";
  Control1.style.display = "none";
  Control2.style.display = "none";


  imgContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(27, 25, 25, 0.208)),url(images/moto-design.jpg)';
  imgContainer.style.backgroundSize = "cover"; 
  imgContainer.style.backgroundPosition = "center"
});



color1.addEventListener('click',() => {
  imgBike.src = "images/XR150L_Colours_Red.png";
  textColor.innerHTML = "Red Non-Metallic";
})

color2.addEventListener('click',() => {
  imgBike.src = "images/XR150L_Colours_white.png";
  textColor.innerHTML = "White Non-Metallic";
})
