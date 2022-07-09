// Assignment code here


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  //inputting the number of character selected
  welcomeMessage()
  selectingNumberOfCharacters()

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Welcome message
function welcomeMessage(){
  let intro = alert('Hello, welcome to password generator. This program will allow you to randomly generate a password within the criteria you select. Press okay to continue')
}


//User selecting number of characters
function selectingNumberOfCharacters() {
  //converting input from a string to an integer
  let numbersSelected = parseInt(prompt('Please enter the number of characters that you would like your password to be. (Min=8 and Max=128)')
  );

    //make it so only numbers inputs are accept
    if (Number.isNaN(numbersSelected)) {
      alert('Not a valid input, please enter a number')
      selectingNumberOfCharacters()
    }if (numbersSelected < 8) {
        alert('Password length is too short, please enter a number that is at least 8.');
        selectingNumberOfCharacters();
      
      }else if (numbersSelected > 128) {
        alert('Password length is too long, please enter a number that is less than 129.');
        selectingNumberOfCharacters();
      
      }else{
        return numbersSelected;
      }
}

//Generating random lower case letter
function randomLowerCase(){
  //this selects a random whole number and displays the corresponding character on char code
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Generating random upper case letter
function randomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Generating random characters
function specialCharacters() {
  let specialCharacterArray = ['!', '@', '#', '$', '%', '&', '*', '-', '.', '^', '<', '>',',',':', ';'];
  return specialCharacterArray.toString(Math.floor(Math.random() * specialCharacterArray.length));
}

console.log(specialCharacters());
