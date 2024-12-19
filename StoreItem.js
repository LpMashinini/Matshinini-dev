///const sideMenu = document.getElementById("sidemenu");

/*menu script
function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}
end here */

const cart = document.querySelector(".cart");
const cartOpen = document.querySelector(".fa-cart-shopping");
const cartClose = document.querySelector(".close");

cartOpen.onclick = () => {
  cart.style.right = "0";
};

cartClose.onclick = () => {
  cart.style.right = "-380px";
};

////payment section
const closePayment = document.querySelector(".close-payment");
const paymentContainer = document.querySelector(".payment-structure");

closePayment.onclick = () => {
  paymentContainer.classList.remove("acive");
};

///cart message
const cartMessage = document.querySelector(".card-messageContainer");

const cartMessageBox = document.querySelector(".cartMessage");

cartMessageBox.onclick = () => {
  cartMessage.classList.remove("active");
};


///shop scroll
ScrollReveal({
  reset: true,
  duration: 2500,
  distance: "100px",
  delay: 500,
});

ScrollReveal().reveal(".shop-content", {
  delay: 400,
  origin: "top",
});
/*cart section*/



if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  const removeBtns = document.querySelectorAll(".fa-trash");

  for (var i = 0; i < removeBtns.length; i++) {
    var button = removeBtns[i];
    button.addEventListener("click", removeCart);
  }

  ///add to cart

  const addToCartBtn = document.getElementsByClassName("add-cart");

  for (var i = 0; i < addToCartBtn.length; i++) {
    var addItemBtn = addToCartBtn[i];
    addItemBtn.addEventListener("click", addToCart);
  }

  ///buy button

  document
    .getElementsByClassName("buy-btn")[0]
    .addEventListener("click", buyButtonClicked);
  document.getElementsByClassName("buy-btn")[0].onclick = () => {
    paymentContainer.classList.add("acive");
  };
}

/// quantity change

var quantityInput = document.getElementsByClassName("cart-quantity");
for (var i = 0; i < quantityInput.length; i++) {
  var input = quantityInput[i];
  addItemBtn.addEventListener("change", quantityChange);
}

///buy button

function buyButtonClicked() {
  var cartContent = document.getElementsByClassName("cart-content")[0];

  updatetotal();
}

////payment
var cartContent = (document.querySelector(".pay-btn").onclick = () => {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  var numItem = document.querySelector(".item-count");
  numItem.innerHTML = 0;
  cartMessage.classList.add("active");
  paymentContainer.classList.remove("acive");

  updatetotal();
});

///remove cart

function removeCart(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
  var numItem = document.querySelector(".item-count");
  numItem.innerHTML--;
}

function quantityChange(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}
///add to cart

function addToCart(event) {
  var buttonToCart = event.target;
  var shopItem = buttonToCart.parentElement;
  var tittle = shopItem.getElementsByClassName("product-title")[0].innerText;
  var productPrice = shopItem.getElementsByClassName("price")[0].innerText;
  var productImg = shopItem.getElementsByClassName("product-img")[0].src;

  addProductToCart(tittle, productPrice, productImg);
  updatetotal();

  var numItem = document.querySelector(".item-count");
  numItem.innerHTML++;


}

function addProductToCart(tittle, productPrice, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");

  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == tittle) {
      alert("item already added to cart");
      return;
    }
  }

  var cartContentBox = `
   <img src="${productImg}" class="cart-img">
   <div class="details">
    <div class="cart-product-title">${tittle}</div>
    <div class="cart-price">${productPrice}</div>
    <input type="number" value="1" class="cart-quantity">
   </div>
    <!--remove cart-->
    <i class="fa-solid fa-trash"></i>
`;

  cartShopBox.innerHTML = cartContentBox;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("fa-trash")[0]
    .addEventListener("click", removeCart);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChange);
}

///Total cart

function updatetotal() {
  var cartContents = document.getElementsByClassName("cart-content")[0];
  var cartboxes = cartContents.getElementsByClassName("cart-box");

  var total = 0;

  for (let i = 0; i < cartboxes.length; i++) {
    var cartBox = cartboxes[i];

    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var quantity = quantityElement.value;

    var priceAmount = parseFloat(priceElement.innerText.replace("R", ""));

    total += priceAmount * quantity;

    total.toFixed(2);
  }

  document.getElementsByClassName("total-price")[0].innerHTML = "R" + total;
  var totalPay = (document.querySelector(".totalCart").innerHTML = "R" + total);
}

const search = () => {
  const searchBox = document.getElementById("search").value.toUpperCase();
  const products = document.querySelectorAll(".product-box");
  const itemName = document.getElementsByTagName("h2");
  const result = document.querySelector(".result");

  for (let i = 0; i < itemName.length; i++) {
    let match = products[i].getElementsByTagName("h2")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;
      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        products[i].style.display = "";
      } else {
        products[i].style.display = "none";
      }
    }
    if (searchBox.value === "RING" && match.innerText == "EARRINGS") {
      match.innerText.style.display = "none";
    }
  }
};

///payment banks

const bankCon = document.querySelector(".banks");
const bankLogo = document.querySelector(".bankImg");

function bankName() {
  if (bankCon.value == "capitec") {
    bankLogo.src = "images/captec.png";
    bankLogo.style.borderRadius = '0%';
  } else if (bankCon.value == "nedbank") {
    bankLogo.src = "images/nedbank.jpeg";
    bankLogo.style.borderRadius = '0%';
  } else if (bankCon.value == "ABSA") {
    bankLogo.src = "images/absa.jpeg";
    bankLogo.style.borderRadius = '50%';
  } else if (bankCon.value == "Standard bank") {
    bankLogo.src = "images/standard-bank.jpg";
    bankLogo.style.borderRadius = '0%';
  } else if (bankCon.value == "master card") {
    bankLogo.src = "images/master-card.jpeg";
    bankLogo.style.borderRadius = '0%';
  } else if (bankCon.value == "visa") {
    bankLogo.src = "images/visa.jpeg";
    bankLogo.style.borderRadius = '0%';
  } else {
    console.log("hello");
  }
}
