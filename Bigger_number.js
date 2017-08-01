//This function won't run until called
function numbers (num1, num2) {
  if (num1 > num2) {
    alert("The two numbers are " + num1 + " and " + num2 + ". " + num1 + " is greater than " + num2);
    return num1;

//If the numbers are the same
  } else if (num1 == num2) {
      alert("The two numbers are equal.");
      return num1

//If the second number is not passed in
  } else if (typeof(num2) === 'undefined') {
      alert("One or more of the numbers was not specified in the function call! Try again.")
  } else {
      alert("The two numbers are " + num1 + " and " + num2 + ". " + num2 + " is greater than " + num1);
      return num2;
  }
}

//The function doesn't account for string input. It also breaks if num1 is not specified in the function call, with no apparent way to account for that. It breaks immediately in this case without executing any code. 
