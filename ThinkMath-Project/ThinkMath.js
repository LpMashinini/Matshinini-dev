const question = document.querySelector(".question");
const incorrect = document.querySelector(".incorrect");
const correct = document.querySelector(".correct");
const timer = document.querySelector(".timer");

const url = `https://opentdb.com/api.php?amount=10&category=19&type=multiple`;

let countdownTimer;

async function generate() {
  
  let countdown = 30;

  if (countdownTimer) {
    clearInterval(countdownTimer);
  }

  resetUI();

  countdownTimer = setInterval(() => {
    countdown--;

    if (timer) {
      timer.innerHTML = countdown;
    }

    if (countdown < 1) {
      clearInterval(countdownTimer);

      return (
        countdown,
        (timer.innerHTML = " Time's up"),
        (correct.style.background = "rgb(47, 189, 25)"),
        (incorrect.style.background = "rgb(222, 46, 46)")
      );
    }
  }, 1000);



  try {

    const res = await fetch(url);
    const data = await res.json();

    question.innerHTML = data.results[0].question;
    correct.innerHTML = data.results[0].correct_answer;
    incorrect.innerHTML = data.results[0].incorrect_answers[0];

  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    
  }

  correct.onclick = () => {
    correct.style.background = "rgb(47, 189, 25)";
    incorrect.style.background = "rgb(222, 46, 46)";
    clearInterval(countdownTimer);
    correct.onclick = null;
    incorrect.onclick = null;
  };

  incorrect.onclick = () => {
    incorrect.style.background = "rgb(222, 46, 46)";
    correct.style.background = "rgb(47, 189, 25)";
    clearInterval(countdownTimer);
    correct.onclick = null;
    incorrect.onclick = null;
  };
}

function resetUI() {

    //it reset the button styles

  correct.style.background = "";
  incorrect.style.background = "";
  correct.onclick = null;
  incorrect.onclick = null;
}