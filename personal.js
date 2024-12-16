const tabLinks = document.querySelectorAll(".tabs");
const tabContents = document.querySelectorAll(".tabs-content");
const icon = document.querySelector(".fa-sun");
const iconContainers = document.querySelectorAll(".container");
const Icons = document.querySelectorAll("#icon");
const circles = document.querySelectorAll(".circle");
const iconSvg = document.querySelector(".iconSvg");
const iconToggle = document.querySelector(".toggleContainer");
const navLinks = document.querySelectorAll(".link");

const openTab = (tabName) => {

    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-tab");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab-content");
    }

    event.currentTarget.classList.add("active-tab")
    document.getElementById(tabName).classList.add("active-tab-content")
}


icon.onclick = () => {

    icon.classList.toggle("fa-moon");

    for (iconContainer of iconContainers) {

        for (Icon of Icons) {

            for (circle of circles) {


                for (navLink of navLinks) {

                    if (icon.classList.contains("fa-moon")) {
                        iconContainer.style.background = "linear-gradient(90deg, rgba(14,30,174,1) 35%, rgba(8,79,191,1) 73%)";
                        Icon.classList.add("active");
                        icon.classList.add("activeIcon");
                        circle.classList.add("active-circle");
                        iconToggle.classList.add("active");
                    } else {
                        iconContainer.style.background = "black";
                        Icon.classList.remove("active");
                        circle.classList.remove("active-circle");
                        iconToggle.classList.remove("active");
                        icon.classList.remove("activeIcon");
                        iconToggle.classList.remove("active");
                    }
                }

            }

        }

    }
};
