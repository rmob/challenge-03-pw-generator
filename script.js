// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteria = document.getElementById('c-b');
var passwordText = document.querySelector("#password");
var submitBtn = document.getElementById('submit');

var uChecked = document.getElementById('uppercase')
var lChecked = document.getElementById('lowercase')
var sChecked = document.getElementById('special')
var nChecked = document.getElementById('numeric')

var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = [0,1,2,3,4,5,6,7,8,9];
var special = ['!', '@', '#', '$', '%', '&', '.', '?', '-'];

var randomCharArray = [];
var pwArray = [];







function revealCriteriaBox() {
  passwordText.value = '';
  if (criteria.style.display === 'none') {
    criteria.style.display = 'flex';
  } else {
    criteria.style.display = 'none';
  }
  
}
  


function generateRandomLowercase() {
  alphaLower.split(' ');
  var smLetter =  alphaLower[Math.floor(Math.random() * alphaLower.length)];
  return smLetter;
}

function generateRandomUppercase() {
  alphaUpper.split(' ');
  bgLetter = alphaUpper[Math.floor(Math.random() * alphaUpper.length)];
  return bgLetter;
}

function generateRandomNum() {
  randomNum = num[Math.floor(Math.random() * num.length)]
  return randomNum;
  
}

function generateRandomChar () {
  specialChar = special[Math.floor(Math.random() * special.length)]
 return specialChar;

}


function writePassword() {
  var pwLength = document.getElementById('char-count').value;
  for(i = 0; i < pwLength; i++) {

    if (uChecked.checked === true) {
      randomCharArray.push(generateRandomUppercase());
    }
    
    if (lChecked.checked === true) {
      randomCharArray.push(generateRandomLowercase());
    }
    
    if (sChecked.checked === true) {
      randomCharArray.push(generateRandomChar());
    }
    
    if (nChecked.checked === true) {
      randomCharArray.push(generateRandomNum());
    }
    
    if (uChecked.checked === false && lChecked.checked === false &&
      sChecked.checked === false && nChecked.checked === false) {
      alert('Please select password criteria to include');
      break;
    }
      
    }

    for (i = 0; i < pwLength; i++) {
      var selection = randomCharArray[Math.floor(Math.random() * randomCharArray.length)]
      pwArray.push(selection);
    
  }

 
  password = pwArray.join('')
  passwordText.value = password;
  criteria.style.display = 'none';
}



  

revealCriteriaBox();
generateBtn.onclick = revealCriteriaBox;
submitBtn.onclick = writePassword;

