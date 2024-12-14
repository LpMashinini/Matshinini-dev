const tabLinks = document.querySelectorAll(".tabs");
const tabContents = document.querySelectorAll(".tabs-content");
const evelope = document.querySelector("fa-solid fa-envelope");
// "fa-regular fa-envelope-open"


const openTab = (tabName) => {

    for(tabLink of tabLinks){
        tabLink.classList.remove("active-tab");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab-content");
    }
    event.currentTarget.classList.add("active-tab")
    document.getElementById(tabName).classList.add("active-tab-content")
}