// Assignment code here

//-----Global variables-----
var confirmLength;
var confirmNumber;
var confirmCharacter;
var confirmLowercase;
var confirmUppercase;
var lower = randomLowerCase();
var upper = randomUpperCase();
var character = randomSpecialCharacter();
var number = randomNumber();

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
  var confirmLowerCase = confirm('Click OK for your password to contain LOWERCASE letters.')
  var confirmNumericCharacter = confirm('Click OK for your password to contain NUMBERS.');
  var confirmSpecialCharacter = confirm('Click OK for your password to contain SPECIAL characters.');

  //if no options were no
  while (confirmUpperCase === false && confirmLowerCase === false && confirmNumericCharacter === false && confirmSpecialCharacter === false) {
      alert('You must choose at lease one parameter');
      var confirmUpperCase = confirm('Click OK for your password to contain UPPERCASE letters.');
      var confirmLowerCase = confirm('Click OK for your password to contain LOWERCASE letters.')
      var confirmNumericCharacter = confirm('Click OK for your password to contain NUMBERS.');
      var confirmSpecialCharacter = confirm('Click OK for your password to contain SPECIAL characters.');
  }

  choices = [];
  //Adds selected character type to an empty array
  function selectedChoice () {
    if (confirmSpecialCharacter === true ) {
      choices = choices.push('yes this work') };

    if (confirmUpperCase === true ) {
      choices = choices.push(confirmCharacter) };

    if (confirmLowerCase === true ) {
      choices = choices.push(confirmLowercase) };
    
    if (confirmNumber === true ) {
      choices = choices.push(confirmLowercase) };
    
  }
  
  choices.push('yes this works')
  console.log(choices);
  finalPassword = [];
}





//       //character, uppercase, lowercase options selected
//       else if (confirmCharacter && confirmUppercase && confirmLowercase) {
//         choices = character.concat(upper, lower);
//       }

//       //character, number, uppercase options selected
//       else if (confirmCharacter && confirmNumber && confirmUppercase) {
//         choices = character.concat(number, upper);
//       }

//       //character, number, lowercase options selected
//       else if (confirmCharacter && confirmNumber && confirmLowercase) {
//         choices = character.concat(number, lower);
//       }

//       //number, upper and lowercase options selected
//       else if (confirmNumber && confirmUppercase && confirmLowercase) {
//         choices = number.concat(upper, lower);
//       }

//       //character and uppercase options selected
//       else if (confirmCharacter && confirmUppercase) {
//         choices = character.concat(upper);
//       }

//        //character and lowercase options selected
//       else if (confirmCharacter && confirmLowercase) {
//         choices = character.concat(lower);
//       }

//        //character and number options selected
//       else if (confirmCharacter && confirmNumber) {
//         choices = character.concat(number);
//       }

//        //upper and lowercase options selected
//       else if (confirmUpper && confirmLowercase) {
//         choices = upper.concat(lower);
//       }

//        //upper and number options selected
//       else if (confirmUpper && confirmNumber) {
//         choices = upper.concat(number);
//       }

//        //lower and number options selected
//       else if (confirmLowercase && confirmNumber) {
//         choices = lower.concat(number);
//       }

//        //only character selected
//       else if (confirmCharacter) {
//         choices = character.concat(character);
//       }

//       //only uppercase selected
//       else if (confirmUppercase) {
//         choices = upper.concat(upper);
//       }

//       //only lowercase selected
//       else if (confirmLowercase) {
//         choices = lower.concat(lower);
//       }

//        //only number selected
//       else if (confirmNumber) {
//         choices = number.concat(number);
//       }

// }



//****is there a way to include these into conditional statements, how can I make this equal to choices */
//Generating random lower case letter
function randomLowerCase(){
  //this selects a random lower case letter
 return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Generating random upper case letter
function randomUpperCase(){
  //this selects a random upper case letter
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Generating random characters
function randomSpecialCharacter() {
  let specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '-', '.', '^', '<', '>',',',':', ';'];
  //this selects a random special character
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }

//Generating random numbers
function randomNumber() {
  //this selects a random number
 return Math.floor(Math.random() * 9)
}


