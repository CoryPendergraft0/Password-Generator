// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
//Your code goes here
var letters = "abcdefghijklmnopqrstuvwxyz";
var special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0987654321"
var upLetters = letters.toUpperCase
var itsUpperCase = confirm("Would you like to use Uppercase?")


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
