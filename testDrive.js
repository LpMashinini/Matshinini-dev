const productBox = document.querySelectorAll(".product-box");
const checkBox = document.querySelectorAll(".checkBox");
const product_title = document.querySelectorAll(".product-title");
const selection = document.querySelector(".selection");



for (let i = 0; i < checkBox.length; i++) {

  checkBox[i].addEventListener("change", () => {
    const checkedCount = Array.from(checkBox).filter(
      (box) => box.checked
    ).length;


    if (checkedCount == 3) {
      console.log("alert box");
      selection.style.backgroundColor = "red";   
    } else {
      console.log("not less than 3");
      selection.style.backgroundColor = "rgb(195, 195, 195)";
    }


    for (let i = 0; i < product_title.length; i++) {

        if (checkBox[i].checked) {

            product_title[i].style.color = "red"

        } else if(!checkBox[i].checked) {

          product_title[i].style.color = "rgb(184, 184, 184)"
          checkBox[i].style.display = 'none'
        }
        
    }

  });

}

for (let i = 0; i < productBox.length; i++) {

  for (let i = 0; i < checkBox.length; i++) {

    productBox[i].addEventListener("click", () => {
      checkBox[i].style.display = "block";

    });
  }
}
