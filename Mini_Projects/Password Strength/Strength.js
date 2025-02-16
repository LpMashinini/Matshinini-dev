const pass = document.getElementById('input');
const strength = document.getElementById('strength');
const text = document.getElementById('text');


pass.addEventListener('input',()=>{
  if(pass.value.length > 0 ){
    text.style.display = "block"
  }else{
    text.style.display = "none"  
  }


  if(pass.value.length <= 4){
    strength.innerHTML = 'weak';
    strength.style.color = 'red';
  }else if(pass.value.length >= 6 && pass.value.length == 9){
    strength.innerHTML = 'medium';
    strength.style.color = 'yellow'
  }else if(pass.value.length >= 9){
    strength.innerHTML = 'strong';
    strength.style.color = 'deeppink';
  }

})