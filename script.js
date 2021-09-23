

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
  
  if (passLength > 8 && passLength < 128) {
    // confirm user wants lowercase letters
    // let useLowerCase <- confirm result
    var useLowerCase = confirm ("Would you like to use Lower Case letters?");
    console.log(useLowerCase);
    
    // confirm user wants uppercase letters
    // let useUpperCase <- confirm result
    var useUpperCase = confirm ("Would you like to use Upper Case letters?");
    console.log(useUpperCase);
    
    // confirm user wants numbers
    // let useNubmers <- confirm result
    var useNumbers = confirm ("Would you like to use numbers?");
    console.log(useNumbers);
    
    var useSpecial = confirm ("Would you like to use special characters?")
    console.log(useSpecial);
    } else {
    alert("Your password must be betwen 8 and 128 characters.")
    return generatePassword();
    }
  
  // TODO: Your code to generate a password goes here. Be sure to return a password
  // string. You will need to change the following two lines of code.

  var password = "password1234";
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
