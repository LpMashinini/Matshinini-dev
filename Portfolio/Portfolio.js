const icon = document.querySelector(".fa-moon");
const iconContainers = document.querySelectorAll(".container");
const Icons = document.querySelectorAll("#icon");
const nav_container = document.querySelectorAll(".nav-container");
const nav_el = document.querySelector(".nav-el");
const iconSvgs = document.querySelectorAll(".iconSvg");
const iconToggle = document.querySelector(".toggleContainer");
const labels = document.querySelectorAll(".label");
const btns = document.querySelectorAll(".btn");
const inputIcons = document.querySelectorAll(".input-col");
const projects = document.querySelectorAll(".projects1");
const projectLinks = document.querySelectorAll(".projectText");
const projectLinkIcons = document.querySelectorAll(".fa-up-right-from-square");
const project_btn = document.querySelector(".projectsBtn");
const add_projects = document.querySelector("#addProject");
const texts = document.querySelectorAll(".dark");
const titles = document.querySelectorAll(".title");
const circles = document.querySelectorAll(".circle");
const links = document.querySelectorAll(".link");
const name = document.querySelector(".name");
const btn_submit = document.querySelector(".btns");



// navbar script

function openMenu() {
  nav_el.style.right = "0px";
}

function closeMenu() {
  nav_el.style.right = "-1000px";
}

// cv script
const checkbox = document.querySelector('.input');
const downloadLink = document.getElementById('cvDownloadLink');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        downloadLink.click();
    }
});

// Dark Mode Script

// function for dark/light mode


const toggleMode = () => {

  const isDarkMode = icon.classList.contains("fa-moon");

  icon.classList.toggle("fa-sun", isDarkMode);
  icon.classList.toggle("fa-moon", !isDarkMode);

  if(isDarkMode){
    darkMode();
  }else{
    lightMode();
  }
}

icon.addEventListener('click', toggleMode)



function darkMode() {

  iconContainers.forEach(iconContainer => iconContainer.style.background = "rgb(37, 43, 105)");
  Icons.forEach(Icon =>  Icon.classList.add("active"));
  labels.forEach(label => label.classList.add("active-label"));
  iconSvgs.forEach(iconSvg => iconSvg.classList.add("activesvg"));
  btns.forEach( btn =>   btn.classList.add("active-btn"));
  inputIcons.forEach(inputIcon =>   inputIcon.classList.add("active-inputIcon"));
  projects.forEach(project =>   project.classList.add("active-project"));
  projectLinks.forEach(projectLink =>   projectLink.classList.add("active-Link"));
  projectLinkIcons.forEach( projectLinkIcon =>  projectLinkIcon.classList.add("activeLinkIcon"));
  nav_container.forEach( navCon => navCon.classList.add("active-nav-bag"));
  texts.forEach( text => text.classList.add("active-light"));
  circles.forEach( circle => circle.classList.add("active-circle"));
  links.forEach( link => link.classList.add("link-circle"));
  nav_el.classList.add("active-nav-el");
  name.classList.add("active-name");
  btn_submit.classList.add("active-submit");
}

function lightMode() {

  iconContainers.forEach(iconContainer => iconContainer.style.background = "hsl(0, 0%, 91%)");
  Icons.forEach(Icon =>  Icon.classList.remove("active"));
  labels.forEach(label => label.classList.remove("active-label"));
  iconSvgs.forEach(iconSvg => iconSvg.classList.remove("activesvg"));
  btns.forEach( btn =>   btn.classList.remove("active-btn"));
  inputIcons.forEach(inputIcon =>   inputIcon.classList.remove("active-inputIcon"));
  projects.forEach(project =>   project.classList.remove("active-project"));
  projectLinks.forEach(projectLink =>   projectLink.classList.remove("active-Link"));
  projectLinkIcons.forEach( projectLinkIcon =>  projectLinkIcon.classList.remove("activeLinkIcon"));
  nav_container.forEach( navCon => navCon.classList.remove("active-nav-bag"));
  texts.forEach( text => text.classList.remove("active-light"));
  circles.forEach( circle => circle.classList.remove("active-circle"));
  links.forEach( link => link.classList.remove("link-circle"));
  nav_el.classList.remove("active-nav-el");
  name.classList.remove("active-name");
  btn_submit.classList.remove("active-submit");

}

// Project section script

project_btn.addEventListener("click", () => {
  add_projects.classList.toggle("active-project");
  alert("Resize screen");
});

// Scroll script

ScrollReveal({
  reset: true,
  duration: 2500,
  distance: "100px",
  delay: 500,
});
ScrollReveal().reveal(".text", {
  delay: 300,
  origin: "top",
});
ScrollReveal().reveal(".icons", {
  delay: 300,
  origin: "bottom",
});
ScrollReveal().reveal(".label", {
  delay: 300,
  origin: "left",
});
ScrollReveal().reveal(".aboutImg", {
  delay: 300,
  origin: "left",
});
ScrollReveal().reveal(".headerSection", {
  delay: 300,
  origin: "top",
});
ScrollReveal().reveal(".aboutText", {
  delay: 300,
  origin: "right",
});
ScrollReveal().reveal(".left-circle-container", {
  delay: 300,
  origin: "top",
});
ScrollReveal().reveal(".bottom", {
  delay: 300,
  origin: "bottom",
});
ScrollReveal().reveal(".bottom1", {
  delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal(".bottom2", {
  delay: 700,
  origin: "bottom",
});
ScrollReveal().reveal(".btns", {
  delay: 300,
  origin: "left",
});
ScrollReveal().reveal(".btn", {
  delay: 350,
  origin: "left",
});
ScrollReveal().reveal(".input-col", {
  delay: 300,
  origin: "right",
});

ScrollReveal().reveal(".icon", {
  delay: 300,
  origin: "right",
});
