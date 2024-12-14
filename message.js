let userTexts = document.querySelectorAll(".user-text");
let userPics = document.querySelectorAll(".user-pic");


function openReview(){

    for(userText of userTexts){
        userText.classList.remove("active-text")
    }
    for(userPic of userPics){
        userPic.classList.remove("active-pic")
    }

    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}


// sliding content

ScrollReveal({
    reset: true,
    duration: 2500,
    distance: "100px",
    delay: 500,
  });
  
  //   header slide
  ScrollReveal().reveal(".headerText ",{
    delay: 300,
    origin: "top",
  });
  //   header slide
  ScrollReveal().reveal(".left-slide ",{
    delay: 300,
    origin: "left",
  });

  ScrollReveal().reveal(".right-slide ",{
    delay: 300,
    origin: "right",
  });

  ScrollReveal().reveal(".col-container ",{
    delay: 300,
    origin: "bottom",
  });

  ScrollReveal().reveal(".btn",{
    delay: 310,
    origin: "bottom",
  });
