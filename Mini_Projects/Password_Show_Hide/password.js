const eye = document.querySelector(".fa-eye-slash");
const input = document.querySelector("input");

eye.onclick = ()=> {
  if(input.type == "password"){
    input.type = "text"
    eye.classList.replace("fa-eye-slash","fa-eye")
  }else{
    input.type = "password"
    eye.classList.replace("fa-eye","fa-eye-slash")
  }
}