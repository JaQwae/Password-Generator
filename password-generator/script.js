// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  //inputting the number of character selected
  selectingNumberOfCharacters()

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//User selecting number of characters
function selectingNumberOfCharacters() {
  var numbersSelected = prompt('Please enter the number of characters that you would like your password to be. (Min=8 and Max=128)')
    if (numbersSelected < 8) {
      prompt('Password length is too short, please enter a number that is at least 8.')

      } else {
        return numberselected
      }

      // } elif (numbersSelected > 128) {
      //   prompt('Password length is too long, please enter a number that is at least 8.')

}
