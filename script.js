// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
//Your code goes here
var letters = "abcdefghijklmnopqrstuvwxyz";
var special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0987654321"
var upLetters = letters.toUpperCase
var itsUpperCase = confirm("Would you like to use Uppercase?")
var itsLowerCase = confirm("Would you like to use Lowercase?")
var isSpecial = confirm("Would you like to use Special characters?")
var isNumber = confirm("Wopuld you like to use Numbers?")


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
