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
  if (Prompts) 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  var password = "";
  for (i = 0; i < CharacterLength; i++) {
    var randomchoice = Math.floor(Math.random * UserChoice.length)
    password = password + UserChoice[randomchoice];
  };
  return password;
};


function Prompts() {
  CharacterLength = parseInt(prompt("How many characters do you want your password to be?"))
  if (isNaN(CharacterLength || CharacterLength < 8 || CharacterLength > 128)) {
    return false
  }
if (confirm("Do you want to include lowercase characters?")) {
  UserChoice = UserChoice.concat(LowerCaseCharacters)
}
if (confirm("Do you want to include uppercase characters?")) {
  UserChoice = UserChoice.concat(UpperCaseCharacters)
}
if (confirm("Do you want to include numeric characters?")) {
  UserChoice = UserChoice.concat(Numbers)
}
if (confirm("Do you want to include special characters?")) {
  UserChoice = UserChoice.concat(SpecialCharacters)
}
return true
}