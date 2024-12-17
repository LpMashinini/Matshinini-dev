const tabLinks = document.querySelectorAll(".tabs");
const tabContents = document.querySelectorAll(".tabs-content");
const icon = document.querySelector(".fa-sun");
const iconContainers = document.querySelectorAll(".container");
const Icons = document.querySelectorAll("#icon");
const circles = document.querySelectorAll(".circle");
const iconSvgs = document.querySelectorAll(".iconSvg");
const iconToggle = document.querySelector(".toggleContainer");
const labels = document.querySelectorAll(".label");
const sectionHeaders = document.querySelectorAll(".headerSection");
const btns = document.querySelectorAll(".btns");
const inputIcons = document.querySelectorAll(".input-col");
const projects = document.querySelectorAll(".projects1");
const projectLinks = document.querySelectorAll(".projectText");
const projectLinkIcons = document.querySelectorAll(".fa-up-right-from-square");

const openTab = (tabName) => {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-tab");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab-content");
  }

  event.currentTarget.classList.add("active-tab");
  document.getElementById(tabName).classList.add("active-tab-content");
};

// Dark Mode Script
icon.onclick = () => {
  icon.classList.toggle("fa-moon");

  for (iconContainer of iconContainers) {
    for (Icon of Icons) {
      for (circle of circles) {
        for (label of labels) {
          for (circle of circles) {
            for (iconSvg of iconSvgs) {
              for (sectionHeader of sectionHeaders) {
                for (btn of btns) {
                  for(inputIcon of inputIcons){
                    for(project of projects){
                      for(projectLink of projectLinks){
                        for(projectLinkIcon of projectLinkIcons){
                          if (icon.classList.contains("fa-moon")) {
                            iconContainer.style.background =
                              "linear-gradient(90deg, rgba(14,30,174,1) 35%, rgba(8,79,191,1) 73%)";
                            Icon.classList.add("active");
                            icon.classList.add("activeIcon");
                            circle.classList.add("active-cricle");
                            iconToggle.classList.add("active");
                            label.classList.add("active-label");
                            iconSvg.classList.add("activesvg");
                            sectionHeader.classList.add("active");
                            btn.classList.add("active-btn");
                            inputIcon.classList.add("active-inputIcon")
                            project.classList.add("active-project")
                            projectLink.classList.add("active-Link")
                            projectLinkIcon.classList.add("activeLinkIcon")
                          } else {
                            iconContainer.style.background = "black";
                            Icon.classList.remove("active");
                            circle.classList.remove("active-cricle");
                            iconToggle.classList.remove("active");
                            icon.classList.remove("activeIcon");
                            iconToggle.classList.remove("active");
                            label.classList.remove("active-label");
                            iconSvg.classList.remove("activesvg");
                            sectionHeader.classList.remove("active");
                            btn.classList.remove("active-btn");
                            inputIcon.classList.remove("active-inputIcon")
                            project.classList.remove("active-project")
                            projectLink.classList.remove("active-Link")
                            projectLinkIcon.classList.remove("activeLinkIcon")
                          }
                        }
                      }
                      
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

// Scroll script

ScrollReveal({
  reset: true,
  duration: 2500,
  distance: "100px",
  delay: 500,
});


ScrollReveal().reveal(".text",{
  delay: 300,
  origin: "top",
});
ScrollReveal().reveal(".icons",{
  delay: 300,
  origin: "bottom",
});

ScrollReveal().reveal(".label",{
  delay: 300,
  origin: "left",
});

ScrollReveal().reveal(".aboutImg",{
  delay: 300,
  origin: "left",
});

ScrollReveal().reveal(".headerSection",{
  delay: 300,
  origin: "top",
});

ScrollReveal().reveal(".aboutText",{
  delay: 300,
  origin: "right",
});

ScrollReveal().reveal(".bottom",{
  delay: 300,
  origin: "bottom",
});

ScrollReveal().reveal(".btns",{
  delay: 300,
  origin: "left",
});

ScrollReveal().reveal(".input-col",{
  delay: 300,
  origin: "right",
});

ScrollReveal().reveal(".icon",{
  delay: 300,
  origin: "right",
});
