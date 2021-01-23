//add array's of numbers upper case letters lower case letters and special characters.
var specialCharaters = ["!", "#", "$", "%", "'", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^",]; 
var capitalCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function randomize(array){
  var grabIndex = Math.floor(Math.random()*array.length)
  var randomCharacter = array[grabIndex]
  return randomCharacter
}
//prompt for user choices. 
function userPrompt (){
var passwordLength = parseInt(prompt ("How long would you like your password?"))
console.log (passwordLength)
if (passwordLength < 9) 
{alert("Password must be at least 9 characters")
return
}
if (passwordLength > 128)
{alert("Password must be less then 129 charaters")
return}
var hasSpecialCharacters = confirm("Do you want you password to have cool characters")
var hasCapitalCharacters = confirm("Do you want your password to have capital letters?")
var hasLowerCharacter = confirm("Do you want your password to have lower case letters?")
var hasNumberCharacters = confirm("Do you want your password to have numbers?")

var userChoices = {
length: passwordLength, 
specialChosenCharacters: hasSpecialCharacters,
capitalChosenCharacters: hasCapitalCharacters,
LowerChosenCharacters: hasLowerCharacter,
numberChosenCharacters: hasNumberCharacters
}
console.log(userChoices)
return userChoices

//function for randomization.
//displaying it on the page.

}
function generatePassword(){
  var userChoices1 = userPrompt()
  var newPassword = []
  var possibleCharacters = []

  if(userChoices1.numberChosenCharacters) {
    possibleCharacters = possibleCharacters.concat(numberCharacters)
    possibleCharacters.push(randomize(numberCharacters))
  }
  if(userChoices1.LowerChosenCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCharacters)
    possibleCharacters.push(randomize(lowerCharacters))
  }
  if(userChoices1.specialChosenCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharaters)
    possibleCharacters.push(randomize(specialCharaters))
  }
  if(userChoices1.capitalChosenCharacters) {
    possibleCharacters = possibleCharacters.concat(capitalCharacters)
    possibleCharacters.push(randomize(capitalCharacters))
  }

  for(var i = 0; i< userChoices1.length; i++){
    var possible = randomize(possibleCharacters)
    newPassword.push(possible)
  }
console.log(newPassword.join(""))
return newPassword.join("")
}
//create a function that takes in user input and randomizes their chosen characters based on their choices.

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
