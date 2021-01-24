//add array's of numbers upper case letters lower case letters and special characters.
var specialCharaters = ["!", "#", "$", "%", "'", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^",]; 
var capitalCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//This is a function to randomize the choice of characters.
function randomize(array){
  var grabIndex = Math.floor(Math.random()*array.length)
  var randomCharacter = array[grabIndex]
  return randomCharacter
}
//prompt for user choices. 
function userPrompt (){
var passwordLength = parseInt(prompt ("How long would you like your password?"))
if (passwordLength < 9) 
{alert("Password must be at least 9 characters")
return
}
if (passwordLength > 128)
{alert("Password must be less then 129 characters")
return}
// These varibles are the booleans for what kinds of characters they want to use. 
var hasSpecialCharacters = confirm("Do you want you password to have cool characters")
var hasCapitalCharacters = confirm("Do you want your password to have capital letters?")
var hasLowerCharacter = confirm("Do you want your password to have lower case letters?")
var hasNumberCharacters = confirm("Do you want your password to have numbers?")
// created an object to store answer to booleans and to console.log to check and see if the code is working.
var userChoices = {
length: passwordLength, 
specialChosenCharacters: hasSpecialCharacters,
capitalChosenCharacters: hasCapitalCharacters,
LowerChosenCharacters: hasLowerCharacter,
numberChosenCharacters: hasNumberCharacters
}
return userChoices
}
// created a function to determine the total number of character available for the password based on the boolean answers earlier. 
function generatePassword(){
  var userChoices1 = userPrompt()
  var newPassword = []
  var possibleCharacters = []
// adds numbers.
  if(userChoices1.numberChosenCharacters) {
    possibleCharacters = possibleCharacters.concat(numberCharacters)
    possibleCharacters.push(randomize(numberCharacters))
  }
  // adds lower case letters.
  if(userChoices1.LowerChosenCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCharacters)
    possibleCharacters.push(randomize(lowerCharacters))
  }
  //adds special characters.
  if(userChoices1.specialChosenCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharaters)
    possibleCharacters.push(randomize(specialCharaters))
  }
  // adds capital letters.
  if(userChoices1.capitalChosenCharacters) {
    possibleCharacters = possibleCharacters.concat(capitalCharacters)
    possibleCharacters.push(randomize(capitalCharacters))
  }
// this for loop will generate the correct number of characters from the given pool. (userChoice1.length)
  for(var i = 0; i< userChoices1.length; i++){
    var possible = randomize(possibleCharacters)
    newPassword.push(possible)
  }
return newPassword.join("")
}
// This is the function that makes the password viewable outside of the console.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
