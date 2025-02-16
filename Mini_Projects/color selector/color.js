const colorBox = document.querySelector('.colorBox');
const span = document.querySelectorAll('span');

function changeColor(color){
  colorBox.style.background = color;
  span.forEach((item)=>{
    item.classList.remove('active')
  })
  event.target.classList.add('active')
}