const gamepad = document.querySelector(".fa-gauge");
const stopwatch = document.querySelector(".fa-bicycle");
const sprayCan = document.querySelector(".fa-shield");
const Control1 = document.querySelector(".Control");
const efficiency1 = document.querySelector(".Efficiency");
const exterior1 = document.querySelector(".Exterior");
const Control2 = document.querySelector(".Control1");
const efficiency2 = document.querySelector(".Efficiency1");
const exterior2 = document.querySelector(".Exterior1");
const imgContainer = document.querySelector(".imgContainer");
const color1 = document.querySelector("#white");
const color2 = document.querySelector("#black");
const color3 = document.querySelector("#red");
const imgBike = document.querySelector("#imgBike");
const textColor = document.querySelector(".textColor");


// feature and style script

gamepad.addEventListener("click", () => {
  // Performance

  Control1.style.display = "block";
  Control2.style.display = "block";

  efficiency1.style.display = "none";
  efficiency2.style.display = "none";
  exterior1.style.display = "none";
  exterior2.style.display = "none";

  imgContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(27, 25, 25, 0.208)),url(images/performance-street.jpg)';
  imgContainer.style.backgroundSize = "cover"; 
  imgContainer.style.backgroundPosition = "center"
});

stopwatch.addEventListener("click", () => {
  // Bodywork

  efficiency1.style.display = "block";
  efficiency2.style.display = "block";

  Control1.style.display = "none";
  Control2.style.display = "none";
  exterior1.style.display = "none";
  exterior2.style.display = "none";

  imgContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(27, 25, 25, 0.208)),url(images/bodywork-street.jpg)';
  imgContainer.style.backgroundSize = "cover"; 
  imgContainer.style.backgroundPosition = "center"
});

sprayCan.addEventListener("click", () => {
  // Safety

  exterior1.style.display = "block";
  exterior2.style.display = "block";

  efficiency1.style.display = "none";
  efficiency2.style.display = "none";
  Control1.style.display = "none";
  Control2.style.display = "none";


  imgContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(27, 25, 25, 0.208)),url(images/street-wheel.jpg)';
  imgContainer.style.backgroundSize = "cover"; 
  imgContainer.style.backgroundPosition = "center"
});



// color bike selection script

color1.addEventListener('click',() => {
  // color 1
  imgBike.src = "images/streetBike.png";
  textColor.innerHTML = "white Pearlescent";
})

color2.addEventListener('click',() => {
  // color 2

  imgBike.src = "images/street-bike2.png";
  textColor.innerHTML = "Black nMetallic";
})

color3.addEventListener('click',() => {
  // color 3

  imgBike.src = "images/streetBike2.png";
  textColor.innerHTML = "Red Metallic";
})
