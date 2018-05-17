function absVal() {
	// initialize the count for how many times the function can execute the while loop
	var count = 0;
	// user's input for absolute value check. Must parseFloat or parseInt this, because by default, prompt is returned as a string
  var number = parseFloat(prompt('Enter a number to see its absolute value'));
	// saved the typeof check here, so it's determined only once, instead of each time inside the while loop
	var type = typeof(number);
	// sanity check for numerical user input. this will skip on any real number input
  while(type === "undefined" || isNaN(number)) {
		// increment count if the while loop evaluates to true
		count++
		// this message returns in the console. to be much more meaningful to the user, it has to show in a window or popup
    console.log('Use numerical input only, please!');
		// same as when this variable was instantiated. still need to parse it to a number
  	number = parseFloat(prompt('Enter a number to see its absolute value'));
		// stop the program after count reacher 4
		if(count == 4) {
			confirm('Tries exceeded! Program terminating.');
			break
    } // ends count if
  } // ends while loop
	// check value of number. this loop gets skipped if number evaluates to NaN
  if(number < 0) {
      return "The absolute value of " + number + " is " + (number*-1);
  } else if(number >= 0) {
      return "The absolute value of " + number + " is " + number;
  } // ends number if
} // ends absVal
// TODO: add this to a static page? button click to run the function, display result using jquery
// 			make a static page with a nav and or dropdown so the user can choose which js program to run
