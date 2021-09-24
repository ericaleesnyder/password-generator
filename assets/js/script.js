// NOTE: Much of this code was worked out in conjunction with Ivo Gatzinski and Elena Liu

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt user for length
  // let passLength <- prompt result
  var passLength = prompt("Please enter a number between 8 and 128 to specify password length"); 
    
  // Arrays of each of the character types will be used later based on the user's character type choices
  var useLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  var useUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  var useNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  var useSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "_", "-", "~"];
  
  // IF passLength < 8 OR passLength > 128
  // alert user that length must be from 8 to 128
  // end function
  if (passLength < 8 || passLength > 128) {
    alert("Your password must be betwen 8 and 128 characters.")
    return generatePassword();
  }
  
  // This array will be populated by user choices 
  var charTypes = []
  
  // if useLowerCase is TRUE then the function will add the array containing all lowercase values to charTypes
  if (confirm("Would you like to use Lower Case letters?")) {
    charTypes = charTypes.concat(useLowerCase)
  }
  
  // if useUpperCase is TRUE then the function will add the array containing all uppercase values to charTypes
  if (confirm("Would you like to use Upper Case letters?")) {
    charTypes = charTypes.concat(useUpperCase)
  }
  
  // if useNumbers is TRUE then the function will add the array containing all numbers to charTypes
  if (confirm("Would you lik to use Numbers?")) {
    charTypes = charTypes.concat(useNumbers)
  }
  
  // if useSpecial is TRUE then the function will add the array containing all special characters to charTypes
  if (confirm("Would you lik to use Special Characters?")) {
    charTypes = charTypes.concat(useSpecial)
  }
  
  // if charTypes array is empty, the user has not chosen to use any of the character types
  // alert user that at lease one type of characters must be selected
  // end function
  // END IF
  if (charTypes.length === 0) {
    alert("You must choose at least one character type.")
    return generatePassword();
  }
  
  // This line specifies that the password variable type is to be a string - this will be the string displayed
  var password = ""

  // This for statement randomly assigns the values to the characters based on password length specified by user
  var length = passLength;
  for (var i = 0; i < length; ++i) {
    password += charTypes[Math.floor(Math.random() * charTypes.length)];
  }

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
