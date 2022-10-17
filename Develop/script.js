// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var CharacterLength = 8;
var LowerCaseCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var UpperCaseCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z' ];
var Numbers = [ '1','2','3','4','5','6','7','8','9','0' ];
var SpecialCharacters = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '"' ];
var AllCharacters = LowerCaseCharacters + UpperCaseCharacters + Numbers + SpecialCharacters;
var UserChoice = [];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  CharacterLength = parseint(prompt("How many characters do you want your password to be?"))
  if (isNaN(CharacterLength || CharacterLength < 8 || CharacterLength > 128)) {
    return false
  }
if (confirm("Do you want to include lowercase characters?")) {
  UserChoice = UserChoice.concat(LowerCaseCharacters)
}
if (confirm("Do you want to include uppercase characters?")
confirm("Do you want to include numeric characters?");
confirm("Do you want to include special characters?");
}
