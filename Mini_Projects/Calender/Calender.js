const date = document.querySelector(".date")
const day = document.querySelector(".day")
const month = document.querySelector(".month")
const year = document.querySelector(".year")


const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursdays','Friday','Saturdays'];
const allMonth = ['January','February','March','April','May','June','July','August','September','October','November','December']

const today = new  Date();

date.innerHTML = (today.getDate() < 10 ? "0" : '') + today.getDate();

day.innerHTML = weekDays[today.getDay()];

month.innerHTML = allMonth[today.getMonth()];

year.innerHTML = today.getFullYear();