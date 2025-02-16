const conTainer = document.querySelector('.container');
const icon = document.querySelector('.fa-moon');


icon.addEventListener('click',()=>{
  conTainer.classList.toggle('light-theme')
  
  if (conTainer.classList.contains('light-theme')) {
    icon.classList.replace('fa-moon','fa-sun')
  }else{
    icon.classList.replace('fa-sun','fa-moon') 
  }
})