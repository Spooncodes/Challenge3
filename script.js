//Start code
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");
if (passwordLength < 8 || passwordLength > 128){
  alert("Invalid number of characters")
  return;
}
  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;


  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters
  
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";
  
  
  // Generator functions**
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
  
    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
  
    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
  
    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
  
};

// Checks to make sure user selected ok for all and uses empty minimums from above

if (numbers === true) {
  minimumNumbers = functionArray.getNumbers();
  minimumCount++;

}

if (lowerCases === true) {
  minimumLowerCases = functionArray.getLowerCases();
  minimumCount++;

}

if (upperCases === true) {
  minimumUpperCases = functionArray.getUpperCases();
  minimumCount++;

}

if (special === true) {
  minimumSpecialCharacters = functionArray.getSpecialCharacters();
  minimumCount++;

}

// empty string variable for the for loop below
var randomPasswordGenerated = "";

// to make sure characters are added to the password
randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLowerCases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumSpecialCharacters;

// loop getting random characters
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {

  // check what type of characters we want --> verify
  if(numbers === true && randomPasswordGenerated.length < passwordLength) {
    var randomNumberPicked = functionArray.getNumbers(); 
    randomPasswordGenerated+=randomNumberPicked
  }

  if(lowerCases === true && randomPasswordGenerated.length < passwordLength) {
    var randomLowerCase = functionArray.getLowerCases(); 
    randomPasswordGenerated+=randomLowerCase
  }

  if(upperCases === true && randomPasswordGenerated.length < passwordLength) {
    var randomUpperCases = functionArray.getUpperCases(); 
    randomPasswordGenerated+=randomUpperCases
  }

  if(special === true && randomPasswordGenerated.length < passwordLength) {
    var randomSpecial = functionArray.getSpecialCharacters(); 
    randomPasswordGenerated+=randomSpecial
  }
  // get a random character from those types
}


return randomPasswordGenerated;

}

const specialCharacters = "!@#$%^&*()";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
