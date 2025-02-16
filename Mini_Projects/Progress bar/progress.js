const circular = document.querySelector('.circular');
const progressValue = document.querySelector('.pro-value');


let progressValueStart = 0;
let progressEndValue = 90;

let progressStart = setInterval(()=>{
  progressValueStart++;

  progressValue.innerHTML = `${progressValueStart}%`;
  circular.style.background = `conic-gradient(#394AFC ${progressValueStart * 3.65}deg,  #6BB0FF 0deg)`;

  if(progressValueStart == progressEndValue){
    clearInterval(progressStart)
  }

},30)