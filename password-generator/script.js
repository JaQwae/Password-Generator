// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  //inputting the number of character selected
  welcomeMessage()
  selectingNumberOfCharacters()

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Welcome message
function welcomeMessage(){
  let intro = alert('Hello, welcome to password generator. This program will allow you to randomly generate a password within the criteria you select. Press okay to get started')
}

//User selecting number of characters
function selectingNumberOfCharacters() {
  
  let numbersSelected = prompt('Please enter the number of characters that you would like your password to be. (Min=8 and Max=128)') 

    if (numbersSelected < 8) {
      alert('Password length is too short, please enter a number that is at least 8.')
      selectingNumberOfCharacters()
    
    }else if (numbersSelected > 128) {
      alert('Password length is too long, please enter a number that is less than 129.')
      selectingNumberOfCharacters()
    
      //setting condition that only allow numbers
    }//else if (numbersSelected == ){
      //alert('Not a valid input, please enter a number')
      //selectingNumberOfCharacters()}
    
    else{
        return numberselected;
      }
}
