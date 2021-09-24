

// IF useLowerCase = false AND useUpperCase = false AND useNumbers = false AND useSpecial = false
// alert user that at lease one type of characters must be selected
// end function
// END IF

// Create a function that assigns random characters based on the character types selected that satisfies the password length specified

// if useLowerCase is TRUE then the function will refer to an array containing all lowercase values and assign them randomly
// if useUpperCase is TRUE then the function will refer to an array containing all uppercase values and assign them randomly
// if useNumbers is TRUE then the function will refer to an array containing all numbers and assign them randomly
// if useSpecial is TRUE then the function will refer to an array containing all special characters and assign them randomly

// Then the function will randomly assign which variable each character is getting (useUpperCase, useLowerCase, useNumbers, useSpecial)

// When functions are complete, display password ON PAGE or in alert (alert uses alert()) 

// Assignment Code
var generateBtn = document.querySelector("#generate");
// confirm user wants special characters
// let useSpecial <- confirm result
// IF passLength < 8 OR passLength > 128
// alert user that length must be from 8 to 128
// end function
// END IF

function generatePassword() {
  // Prompt user for length
  // let passLength <- prompt result
  var passLength = prompt("Please enter a number between 8 and 128 to specify password length"); 
  console.log(passLength);
  
  var useLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var useUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var useNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var useSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "_", "-", "~"];

  if (passLength < 8 || passLength > 128) {
    alert("Your password must be betwen 8 and 128 characters.")
    return generatePassword();
  }

  var charTypes = []

  if (confirm("Would you like to use Lower Case letters?")) {
    charTypes = charTypes.concat(useLowerCase)
  }
  
  if (confirm("Would you like to use Upper Case letters?")) {
    charTypes = charTypes.concat(useUpperCase)
  }

  if (confirm("Would you lik to use Numbers?")) {
    charTypes = charTypes.concat(useNumbers)
  }

  if (confirm("Would you lik to use Special Characters?")) {
    charTypes = charTypes.concat(useSpecial)
  }

  if (charTypes.length === 0) {
    alert("You must choose at least one character type.")
    return generatePassword();
  }
  // TODO: Your code to generate a password goes here. Be sure to return a password
  // string. You will need to change the following two lines of code.
  
  var password = ""

  var length = passLength;
  for (var i = 0; i < length; ++i) {
    password += charTypes[Math.floor(Math.random() * charTypes.length)];
  }
 

  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  // }

  var password = password;
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
