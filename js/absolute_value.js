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
		// show this when input type isn't numeric
    $('#function_return').text('Use numerical input only, please!');
		// same as when this variable was instantiated. still need to parse it to a number
  	number = parseFloat(prompt('Enter a number to see its absolute value'));
		// stop the program after count reacher 4
		if(count === 4) {
			$('#function_return').text('Tries exceeded! Program terminating');
			// breaks out of while loop
			break
    } // ends count if
  } // ends while loop
	// check value of number. this loop gets skipped if number evaluates to NaN
  if(number < 0) {
		$('#function_return').html('The absolute value of ' + number + ' is ' + "<span id='function_result'>" + (number * -1) + "</span>");
  } else if(number >= 0) {
		// use html since special color formatting is being inserted using spans. text color is set in css
		$('#function_return').html('The absolute value of ' + number + ' is ' + "<span id='function_result'>" + number + "</span>");
  } // ends number if
} // ends absVal function
