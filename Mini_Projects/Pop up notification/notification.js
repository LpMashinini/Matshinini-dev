const openBtn = document.getElementById('openbtn');
const closeBtn = document.getElementById('closebtn');
const popUp = document.querySelector('.popUp');

openBtn.onclick = ()=>{
  popUp.classList.add('openpop')
}

closeBtn.onclick = ()=>{
  popUp.classList.remove('openpop')
}