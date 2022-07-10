// Assignment code here

//-----Global variables-----
var confirmLength;
var confirmNumber;
var confirmCharacter;
var confirmLowercase;
var confirmUppercase;
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '<', '>', ',', '.'];

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

  var confirmUpperCase = confirm('Click OK for your password to contain UPPERCASE letters.');
  var confirmLowerCase = confirm('Click OK for your password to contain LOWERCASE letters.');
  var confirmNumericCharacter = confirm('Click OK for your password to contain NUMBERS.');
  var confirmSpecialCharacter = confirm('Click OK for your password to contain SPECIAL characters.');

  //if no options were no
  while (confirmUpperCase === false && confirmLowerCase === false && confirmNumericCharacter === false && confirmSpecialCharacter === false) {
      alert('You must choose at lease one parameter');
      var confirmUpperCase = confirm('Click OK for your password to contain UPPERCASE letters.');
      var confirmLowerCase = confirm('Click OK for your password to contain LOWERCASE letters.');
      var confirmNumericCharacter = confirm('Click OK for your password to contain NUMBERS.');
      var confirmSpecialCharacter = confirm('Click OK for your password to contain SPECIAL characters.');
  }

  var finalPassword = [];

  //Adds selected character type to an empty array, all possible combinations (*talk with tutor it see why function was mking this undefine*)
    if (confirmSpecialCharacter=== true ) {
      finalPassword = finalPassword.concat(specialArr) }; 

    if (confirmUpperCase=== true ) {
      finalPassword = finalPassword.concat(upperArr) }; 

    if (confirmLowerCase=== true ) {
      finalPassword = finalPassword.concat(lowerArr) }; 
    
    if (confirmNumber=== true ) {
      finalPassword = finalPassword.concat(numberArr) }; 
    
  console.log(finalPassword)

  var randomPassword = ''

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + finalPassword[Math.floor(Math.random() * finalPassword.length)];
    
  }
  console.log(randomPassword)
  return randomPassword;
}



// //****is there a way to include these into conditional statements, how can I make this equal to choices */
// //Generating random lower case letter
// function randomLowerCase(){
//   //this selects a random lower case letter
//  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// //Generating random upper case letter
// function randomUpperCase(){
//   //this selects a random upper case letter
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// //Generating random characters
// function randomSpecialCharacter() {
//   let specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '-', '.', '^', '<', '>',',',':', ';'];
//   //this selects a random special character
//   return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
//   }

// //Generating random numbers
// function randomNumber() {
//   //this selects a random number
//  return Math.floor(Math.random() * 9)
// }


