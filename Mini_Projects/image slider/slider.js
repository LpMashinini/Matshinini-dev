const nextBtn = document.querySelector(".fa-arrow-right");
const backBtn = document.querySelector(".fa-arrow-left");
const galleryScroll= document.querySelector(".img-item");

console.log(nextBtn,backBtn);
galleryScroll.addEventListener('wheel',(evt)=>{
  evt.preventDefault();
  galleryScroll.scrollLeft += evt.deltaY;
})

nextBtn.addEventListener("click", () => {
  galleryScroll.scrollLeft += 200;
  galleryScroll.style.scrollBehavior = "smooth";
});

backBtn.addEventListener("click", () => {
  galleryScroll.scrollLeft -= 200;
  galleryScroll.style.scrollBehavior = "smooth";
});