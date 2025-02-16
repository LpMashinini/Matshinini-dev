let container = document.querySelector('.container');
let iconCON = document.querySelector('.icon-con , i');
let bdy = document.querySelector('body');

container.addEventListener('click',()=>{
    bdy.classList.toggle("dark")
})

container.addEventListener('click',()=>{
    container.classList.toggle('active');

    if(container.classList.contains('active')){
        return iconCON.classList.replace('fa-moon','fa-sun')
    }
    return iconCON.classList.replace('fa-sun','fa-moon')
})