// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = [0,1,2,3,4,5,6,7,8,9];
var special = ['!', '@', '#', '$', '%', '&', '.', '?', '-'];

var criteria = document.getElementById('c-b');
var passwordText = document.querySelector("#password");
// var textArea = document.querySelector('textarea');

// function clearThis(x) {
//   if (x.textContent !== ' ') {
//     x.textContent = ' ';
//   }
// }

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

var uChecked = document.getElementById('uppercase')
var lChecked = document.getElementById('lowercase')
var sChecked = document.getElementById('special')
var nChecked = document.getElementById('numeric')

var randomCharArray = [];
var pwArray = [];

var pwLength = document.getElementById('char-count').value;




function writePassword() {
//   e.preventDefault();
  // clearThis(passwordText);
  
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



  
// Add event listener to generate button
// generateBtn.addEventListener("click", revealCriteriaBox());
// console.log(generateRandomLowercase());
// console.log(writePassword());
// console.log(randomCharArray.slice(0, pwLength).join(''));

//for the length of pwLength i want to loop over the randomCharArray to push
//randomly generated values to the pwArray

// for (i = 0; i < pwLength; i++) {
//   var selection = randomCharArray[Math.floor(Math.random() * randomCharArray.length)]
//   pwArray.push(selection);

// }

// console.log(writePassword())
revealCriteriaBox();
generateBtn.onclick = revealCriteriaBox;
submitBtn = document.getElementById('submit');
submitBtn.onclick = writePassword;
// document.getElementById('submit').onclick = writePassword();
