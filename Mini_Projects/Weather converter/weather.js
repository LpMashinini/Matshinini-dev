const celsius = document.getElementById('celsius');
const fehren = document.getElementById('fehrenheit');
const convert = document.querySelector('.fa-solid');

window.addEventListener('load',()=>{

  celsius.addEventListener('input',()=>{
    fehren.value =((celsius.value * 9)/5 + 32).toFixed(2);

    if(!celsius.value) fehren.value = '';
  })

  fehren.addEventListener('input',()=>{
    celsius.value = (((fehren.value - 32 )*5)/9).toFixed(2);
    if (!fehren.value) celsius.value = '';
  })
})
