const inputBox = document.querySelector('.inputbox');
const listContainer = document.querySelector('.list-container');


function addTask(){

  if(inputBox.value == ''){
    alert('add task')
  }else{
    const li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li)

    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }

  inputBox.value = "";


listContainer.addEventListener('click',(e)=>{
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('add')
  }else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
  }
},false)


}