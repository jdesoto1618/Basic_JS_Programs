function compareTwoNumbers (num1, num2) {
  // store parameter values as variables
  var p1 = num1;
  var p2 = num2;
  // sanity check for empty parameters
  if(typeof(p1) === 'undefined' || typeof(p2) === 'undefined') {
    console.log('One or more function inputs are missing!');
    // end function when this if statement runs
    return;
    // check for string input
  } else if(typeof(p1) === 'string' || typeof(p2) === 'string') {
    // character escaped with \ in order to use the single quote in the log statement
    console.log('Please don\'t use words or empty quotes');
    // end function when this if statement runs
    return;
  } // ends typeof if statement check
  // compare values if they're numbers
  if (num1 > num2) {
    alert("The two numbers are " + num1 + " and " + num2 + ". " + num1 + " is greater than " + num2);
  // if the numbers are the same
  } else if (num1 == num2) {
      alert("The two numbers are equal.");
  } else {
      alert("The two numbers are " + num1 + " and " + num2 + ". " + num2 + " is greater than " + num1);
  } // ends number comparator if
} // ends compareTwoNumbers function
