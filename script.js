// Assignment code here

//-----Global variables-----
var confirmLength;
var confirmNumber;
var confirmCharacter;
var confirmLowercase;
var confirmUppercase;
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '<', '>', ',', '.'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  welcomeMessage()
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Welcome message
function welcomeMessage(){
var intro = alert('Hello, welcome to password generator. This program will allow you to randomly generate a password within the criteria you select. Press okay to continue')
}


function generatePassword() {

  var confirmLength = parseInt(prompt('How many characters would you like your password?  Choose between 8 and 128.'));
  //loops until number inputs match the criteria
  while (confirmLength < 8 || confirmLength > 128 || Number.isNaN(confirmLength)) {
      alert('Password length must be between 8 and 128 characters long. Please enter a numerical value between that range.');
      var confirmLength = parseInt(prompt('How many characters would you like you password?  Choose between 8 and 128.'));
  }

  //displays what was selected
  alert('Your password will contain ' + confirmLength + ' characters');

  //allow you to select the type of characters your password will consist of
  var confirmUpperCase = confirm('Click OK for your password to contain UPPERCASE letters.');
  var confirmLowerCase = confirm('Click OK for your password to contain LOWERCASE letters.');
  var confirmNumericCharacter = confirm('Click OK for your password to contain NUMBERS.');
  var confirmSpecialCharacter = confirm('Click OK for your password to contain SPECIAL characters.');

  //if no character type options were selected
  while (confirmUpperCase === false && confirmLowerCase === false && confirmNumericCharacter === false && confirmSpecialCharacter === false) {
      alert('You must choose at lease one parameter');
      var confirmUpperCase = confirm('Click OK for your password to contain UPPERCASE letters.');
      var confirmLowerCase = confirm('Click OK for your password to contain LOWERCASE letters.');
      var confirmNumericCharacter = confirm('Click OK for your password to contain NUMBERS.');
      var confirmSpecialCharacter = confirm('Click OK for your password to contain SPECIAL characters.');
  }

  var finalPassword = [];

  //Adds selected character type to an empty array, all possible combinations (*note to self talk with tutor/TA to see why function was making this undefine also why concat*)
    if (confirmSpecialCharacter=== true ) {
      finalPassword = finalPassword.concat(special) }; 

    if (confirmUpperCase=== true ) {
      finalPassword = finalPassword.concat(upper) }; 

    if (confirmLowerCase=== true ) {
      finalPassword = finalPassword.concat(lower) }; 
    
    if (confirmNumber=== true ) {
      finalPassword = finalPassword.concat(number) }; 
    
  

  var randomPassword = ''
  
  //Generates random combinations of characters
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + finalPassword[Math.floor(Math.random() * finalPassword.length)];
    
  }

  return randomPassword;
  
}


