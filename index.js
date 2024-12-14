const bikeImg = document.querySelector(".bikeImg")
const leftSlide = document.getElementById("left-slide");
const rightSlide = document.getElementById("right-slide");
const model = document.querySelector(".model-bikes");
const change1 = () => {
  bikeImg.src = "images/storebike1.avif";
}
const change2 = () => {
  bikeImg.src = "images/storebike2.avif";
}
const change3 = () => {
  bikeImg.src = "images/storebike3.avif";
}

leftSlide.addEventListener("click", () => {
  model.scrollLeft += 200;
  model.style.scrollBehavior = "smooth";
});

rightSlide.addEventListener("click", () => {
  model.scrollLeft -= 200;
  model.style.scrollBehavior = "smooth";
});

// sliding content

ScrollReveal({
  reset: true,
  duration: 2500,
  distance: "100px",
  delay: 500,
});

//   header slide
ScrollReveal().reveal(".text-content", {
  delay: 300,
  origin: "left",
});

ScrollReveal().reveal(".content-img", {
  delay: 300,
  origin: "top",
});

//   model-section slide
ScrollReveal().reveal(".model-bikes", {
  delay: 300,
  origin: "top",
});

  // shopping-tool section slide

ScrollReveal().reveal(".test-drive-section", {
  delay: 300,
  origin: "top",
});

