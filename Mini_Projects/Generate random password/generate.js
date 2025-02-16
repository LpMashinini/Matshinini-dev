
const passwordBox = document.getElementById("password");
const mini = 12 ;

//uppercase letters
const upperLetter = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
//lowercase letters
const lowerLetters = 'qwertyuioplkjhgfdsazxcvbnm';
//symbols
const symbols = '!@#$%^&*()_+?/><*,/';
//numbers
const numbers = '1234567890';

const allChar = upperLetter + lowerLetters + symbols + numbers;

function generateRandomPassword(){
  let passWord = '';
  
  passWord += upperLetter[Math.floor(Math.random() * upperLetter.length)]
  passWord += lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
  passWord += symbols[Math.floor(Math.random() * symbols.length)]
  passWord += numbers[Math.floor(Math.random() * numbers.length)]


  while(mini > passWord.length){
    passWord += allChar[Math.floor(Math.random() * allChar.length)]
  }

  //display password on input

  passwordBox.value = passWord;
}
