
const gamepad = document.querySelector(".fa-gauge-high");
const stopwatch = document.querySelector(".fa-shield");
const sprayCan = document.querySelector(".fa-spray-can");
const Control1 = document.querySelector(".Control");
const efficiency1 = document.querySelector(".Efficiency");
const exterior1 = document.querySelector(".Exterior");
const Control2 = document.querySelector(".Control1");
const efficiency2 = document.querySelector(".Efficiency1");
const exterior2 = document.querySelector(".Exterior1");
const imgContainer = document.querySelector(".imgContainer");
const color1 = document.querySelector("#white");
const color2 = document.querySelector("#red");
const imgBike = document.querySelector("#imgBike");
const textColor = document.querySelector(".textColor");


gamepad.addEventListener("click", () => {
  //Safety
  Control1.style.display = "block";
  Control2.style.display = "block";

  efficiency1.style.display = "none";
  efficiency2.style.display = "none";
  exterior1.style.display = "none";
  exterior2.style.display = "none";

  imgContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(27, 25, 25, 0.208)),url(images/elite-1.jpg)';
  imgContainer.style.backgroundSize = "cover"; 
  imgContainer.style.backgroundPosition = "center"
});

sprayCan.addEventListener("click", () => {
  // Bodywork
  efficiency1.style.display = "block";
  efficiency2.style.display = "block";

  Control1.style.display = "none";
  Control2.style.display = "none";
  exterior1.style.display = "none";
  exterior2.style.display = "none";

  imgContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(27, 25, 25, 0.208)),url(images/bodywork.jpg)';
  imgContainer.style.backgroundSize = "cover"; 
  imgContainer.style.backgroundPosition = "center"
});

stopwatch.addEventListener("click", () => {
  // Performance
  exterior1.style.display = "block";
  exterior2.style.display = "block";

  efficiency1.style.display = "none";
  efficiency2.style.display = "none";
  Control1.style.display = "none";
  Control2.style.display = "none";


  imgContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(27, 25, 25, 0.208)),url(images/elite-safety.jpg)';
  imgContainer.style.backgroundSize = "cover"; 
  imgContainer.style.backgroundPosition = "center"
});



// bike color selection script
color1.addEventListener('click',() => {
  // color 1
  imgBike.src = "images/scooter2.png";
  textColor.innerHTML = "White Non-Metallic";

})

color2.addEventListener('click',() => {
  // color 2
  imgBike.src = "images/Elite125_Colours_Red.png";
  textColor.innerHTML = "Red Non-Metallic";
})
