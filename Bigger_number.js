//This function won't run until called
function numbers (num1, num2) {
  // if (typeof(num2) === 'undefined') {
  //   alert('One or more of the numbers were not spefied in the function call! Try again!');
  //   return false;
  // }
  if (num1 > num2) {
    alert("The two numbers are " + num1 + " and " + num2 + ". " + num1 + " is greater than " + num2);
    return num1;
  } else if (num1 == num2) {
      alert("The two numbers are equal.");
      return num1
  } else if (typeof(num2) === 'undefined') {
      alert("One or more of the numbers was not specified in the function call! Try again.")
  } else {
    alert("The two numbers are " + num1 + " and " + num2 + ". " + num2 + " is greater than " + num1);
    return num2;
  }
}
