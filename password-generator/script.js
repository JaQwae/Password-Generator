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
  var numbersSelected = prompt('Please select the length of your password. (Min=8 and Max=128)')
}
