const all_models_Btn = document.querySelector(".all-models");
const cbrBtn = document.querySelector(".cbr");
const streetBtn = document.querySelector(".street");
const dual_purpose_Btn = document.querySelector(".dual-purpose");
const tourers_Btn = document.querySelector(".tourers");
const scooters_Btn = document.querySelector(".scooters");
const enduro_Btn = document.querySelector(".enduro");
const moto_x_Btn = document.querySelector(".moto-x");
const kids_Btn = document.querySelector(".kids");
const atv_utility_Btn = document.querySelector(".atv-utility");
const productImg = document.querySelectorAll(".product-img");
const productBox = document.querySelectorAll(".product-box");






all_models_Btn.addEventListener("click", () =>{

    for (let i = 0; i < productBox.length; i++) {
       
        for (let i = 0; i <productImg.length; i++) {

            if(productBox[i].classList == "product-box"){
                productBox[i].style.display = "block";
            }else{
                productBox[i].style.display = "none";
            }
        
        
        }
    
    }


   
})



cbrBtn.addEventListener("click", () =>{

    for (let i = 0; i < productBox.length; i++) {
       
        for (let i = 0; i <productImg.length; i++) {

            if(productBox[i].id == "cbr"){
                productBox[i].style.display = "block";
            }else{
                productBox[i].style.display = "none";
            }
        
        
        }
    
    }


   
})

dual_purpose_Btn.addEventListener("click", () =>{

    for (let i = 0; i < productBox.length; i++) {
       
        for (let i = 0; i <productImg.length; i++) {

            if(productBox[i].id == "dual-purpose"){
                productBox[i].style.display = "block";
            }else{
                productBox[i].style.display = "none";
            }
        
        
        }
    
    }


   
})


streetBtn.addEventListener("click", () =>{

    for (let i = 0; i < productBox.length; i++) {
       
        for (let i = 0; i <productImg.length; i++) {

            if(productBox[i].id == "street"){
                productBox[i].style.display = "block";
            }else{
                productBox[i].style.display = "none";
            }
        
        
        }
    
    }


   
})


tourers_Btn.addEventListener("click", () =>{

    for (let i = 0; i < productBox.length; i++) {
       
        for (let i = 0; i <productImg.length; i++) {

            if(productBox[i].id == "tourers"){
                productBox[i].style.display = "block";
            }else{
                productBox[i].style.display = "none";
            }
        
        
        }
    
    }


   
})


scooters_Btn.addEventListener("click", () =>{

    for (let i = 0; i < productBox.length; i++) {
       
        for (let i = 0; i <productImg.length; i++) {

            if(productBox[i].id == "scooter"){
                productBox[i].style.display = "block";
            }else{
                productBox[i].style.display = "none";
            }
        
        
        }
    
    }


   
})


enduro_Btn.addEventListener("click", () =>{

    for (let i = 0; i < productBox.length; i++) {
       
        for (let i = 0; i <productImg.length; i++) {

            if(productBox[i].id == "enduro"){
                productBox[i].style.display = "block";
            }else{
                productBox[i].style.display = "none";
            }
        
        
        }
    
    }


   
})


moto_x_Btn.addEventListener("click", () =>{

    for (let i = 0; i < productBox.length; i++) {
       
        for (let i = 0; i <productImg.length; i++) {

            if(productBox[i].id == "moto-x"){
                productBox[i].style.display = "block";
            }else{
                productBox[i].style.display = "none";
            }
        
        
        }
    
    }


   
})


kids_Btn.addEventListener("click", () =>{

    for (let i = 0; i < productBox.length; i++) {
       
        for (let i = 0; i <productImg.length; i++) {

            if(productBox[i].id == "kids"){
                productBox[i].style.display = "block";
            }else{
                productBox[i].style.display = "none";
            }
        
        
        }
    
    }


   
})

atv_utility_Btn.addEventListener("click", () =>{

    for (let i = 0; i < productBox.length; i++) {
       
        for (let i = 0; i <productImg.length; i++) {

            if(productBox[i].id == "atv-utility"){
                productBox[i].style.display = "block";
            }else{
                productBox[i].style.display = "none";
            }
        
        
        }
    
    }


   
})






