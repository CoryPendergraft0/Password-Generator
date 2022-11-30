// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
//Your code goes here
var letters = "abcdefghijklmnopqrstuvwxyz";
var special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0987654321";
var upLetters = letters.toUpperCase();
var sum = "";
var length = prompt("Please choose between 8 and 128 characters")

for (length; length < 8 || length > 128; ){
  alert("Please select a valid number")
  var length = prompt("Please choose between 8 and 128 characters")
}

var isUpperCase = confirm("Would you like to use Uppercase?");
var isLowerCase = confirm("Would you like to use Lowercase?");
var isSpecial = confirm("Would you like to use Special characters?");
var isNumber = confirm("Would you like to use Numbers?");


if (isUpperCase) {
  sum = sum.concat(upLetters);
}
if (isLowerCase) {
  sum = sum.concat(letters);
}
if (isSpecial) {
  sum = sum.concat(special);
}
if (isNumber) {
  sum = sum.concat(numbers);
} 

if (!isNumber && !isLowerCase && !isUpperCase && isLowercase){
  alert("You must choose at least 1 option")
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
