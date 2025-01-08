const sideMenu = document.getElementById("sidemenu");
const user = document.querySelector(".fa-user");
const loginForm = document.querySelector(".login-container");
const serverBtn = document.getElementById("serverBtn");
const serverClose = document.querySelector(".server-close");
const serverContainer = document.querySelector(".server-container");
const loginClose = document.querySelector(".login-close");


/*menu script*/

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}

///end here

///login form


serverBtn.onclick = () => {

  const nameInput = document.getElementById("inputText");
  const passInput = document.getElementById("pass");
  const emailInput = document.getElementById("emailInput");

  nameInput.value = "";
  passInput.value = "";
  emailInput.value = "";

  serverContainer.classList.add('open')
  loginForm.classList.remove("active");

};

serverClose.onclick = () => {
  serverContainer.classList.remove('open');
}

user.addEventListener("click", () => {
  loginForm.classList.add("active");
});

loginClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});



/*scroll animation*/

ScrollReveal({
  reset: true,
  duration: 2500,
  distance: "100px",
  delay: 500,
});

/*header scroll */

ScrollReveal().reveal(".backimg", {
  delay: 400,
  origin: "top",
});

ScrollReveal().reveal(".content", {
  delay: 200,
  origin: "left",
});

ScrollReveal().reveal(".textContent", {
  delay: 200,
  origin: "left",
});


/*body scroll*/

ScrollReveal().reveal(".img-item", {
  delay: 400,
  origin: "top",
});

/*email scroll*/
ScrollReveal().reveal(".email-header", {
  delay: 400,
  origin: "top",
});

/*necklace scroll*/
ScrollReveal().reveal(".shop-content", {
  delay: 400,
  origin: "top",
});

/*club section*/

ScrollReveal().reveal(".club-text", {
  delay: 400,
  origin: "left",
});
ScrollReveal().reveal(".about-title", {
  delay: 400,
  origin: "left",
});
ScrollReveal().reveal(".btn-2", {
  delay: 400,
  origin: "left",
});

ScrollReveal().reveal(".clubImg", {
  delay: 400,
  origin: "top",
});

/*scroll animation end here */

/*latest & greatest*/

const nextBtn = document.querySelector(".fa-arrow-right");
const backBtn = document.querySelector(".fa-arrow-left");
const galleryScroll = document.querySelector(".img-item");

nextBtn.addEventListener("click", () => {
  galleryScroll.scrollLeft += 200;
  galleryScroll.style.scrollBehavior = "smooth";
});

backBtn.addEventListener("click", () => {
  galleryScroll.scrollLeft -= 200;
  galleryScroll.style.scrollBehavior = "smooth";
});

/*trending this week*/

const nextBtn_2 = document.getElementById("nextbtn");
const backbtn_2 = document.getElementById("prevbtn");
const galleryScroll_2 = document.getElementById("item-2");

nextBtn_2.addEventListener("click", () => {
  galleryScroll_2.scrollLeft += 200;
  galleryScroll_2.style.scrollBehavior = "smooth";
});

backbtn_2.addEventListener("click", () => {
  galleryScroll_2.scrollLeft -= 200;
  galleryScroll_2.style.scrollBehavior = "smooth";
});


/*email section*/

function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "202329611@spu.ac.za",
    Password : "Spu@9611",
    To : '202329611@spu.ac.za',
    From : document.getElementById('user').value,
    Subject : "jewellery box order",
    Body : "And this is the body"
}).then(
  message => alert("Email sent successfully")
);
}