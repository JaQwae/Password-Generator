// Assignment code here

//-----Global variables-----
// var enter;
// var confirmNumber;
// var confirmCharacter;
// var confirmLowercase;
// var confirmUppercase;
// var lower = randomLowerCase();
// var upper = randomUpperCase();
// var character = randomSpecialCharacter();
// var number = randomNumber();

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

  while (confirmLength < 8 || confirmLength > 128 || Number.isNaN(confirmLength)) {
      alert('Password length must be between 8 and 128 characters long. Please enter a numerical value between that range.');
      var confirmLength = parseInt(prompt('How many characters would you like you password?  Choose between 8 and 128.'));

  }
  alert('Your password will contain ' + confirmLength + ' characters');

  var confirmUpperCase = confirm('Click OK for your password to contain UPPERCASE letters.');
  var confirmLowerCase = confirm('Click OK for your password to contain LOWERCASE letters.')
  var confirmNumericCharacter = confirm('Click OK for your password to contain NUMBERS.');
  var confirmSpecialCharacter = confirm('Click OK for your password to contain SPECIAL characters.');

  while (confirmUpperCase === false && confirmLowerCase === false && confirmNumericCharacter === false && confirmSpecialCharacter === false) {
      alert('You must choose at lease one parameter');
      var confirmUpperCase = confirm('Click OK for your password to contain UPPERCASE letters.');
      var confirmLowerCase = confirm('Click OK for your password to contain LOWERCASE letters.')
      var confirmNumericCharacter = confirm('Click OK for your password to contain NUMBERS.');
      var confirmSpecialCharacter = confirm('Click OK for your password to contain SPECIAL characters.');
  }
}
//ask for users input
  // enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // if (!enter) {
  //     alert("This needs a value");
  // } else if (enter < 8 || enter > 128) {
  //     //validates user input
  //     enter = parseInt(prompt("You must choose between 8 and 128"));
      //*****how to loop if answer is wrong */
//   } else {
//       //prompts after user input validated
//       confirmNumber = confirm("Will this contain numbers? Ok for YES. Cancel for NO.");
//       confirmCharacter = confirm("Will this contain special characters? Ok for YES. Cancel for NO.");
//       confirmUppercase = confirm("Will this contain Uppercase letters? Ok for YES. Cancel for NO.");
//       confirmLowercase = confirm("Will this contain Lowercase letters? Ok for YES. Cancel for NO.");
//   };
//     //else if for 4 negative options
//     if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
//       choices = alert("You must choose a criteria!");
//     }

//       //all options selected
//       else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
//         choices = character.concat(number, character, upper, lower);
//       }

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










// Get references to the #generate element
//let generateBtn = document.querySelector("#generate");

// Write password to the #password input
//..function writePassword() {
  
  //inputting the number of character selected
  //welcomeMessage()
  //selectingNumberOfCharacters()
  //start construction of the string
  //selectDifferentTypes()
    //allow user to selected uppercase, lowercase,....
  //build on string until character count is meet for each element that was selected
  //terminate once length is met
  //display password in text box

  //let password = generatePassword();
  //let passwordText = document.querySelector("#password");

  //passwordText.value = password;
//}


//User selecting number of characters
//function selectingNumberOfCharacters() {
  //converting input from a string to an integer
 // let numbersSelected = parseInt(prompt('Please enter the number of characters that you would like your password to be. (Min=8 and Max=128)')
 // );

 //   make it so only numbers inputs are accept
 //   if (Number.isNaN(numbersSelected)) {
   //   alert('Not a valid input, please enter a number')
 //     selectingNumberOfCharacters()
  //  }if (numbersSelected < 8) {
    //    alert('Password length is too short, please enter a number that is at least 8.');
   //     selectingNumberOfCharacters();
      
    //  }else if (numbersSelected > 128) {
      //  alert('Password length is too long, please enter a number that is less than 129.');
       // selectingNumberOfCharacters();
     // 
    //  }else{
  //      return numbersSelected;
//      }
//}

//Selecting the different types of characters that go in the password
//function selectDifferentTypes() {
 // let includeLowerCase = confirm('Do you want to include lower case letters?')
  //let includeUpperCase = confirm('Do you want to include upper case letters?')
 // let includeSpecialCharacters = confirm('Do you want to include special characters?')
 // let includeNumbers = confirm('Do you want to include numbers?')


