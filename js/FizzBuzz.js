function fuzz(n) {
  // set up variables
  var i, result = [];
  // loop through given values, with <= n as the highest value, specified by user in the DOM
  for(i=1; i<=n; i++) {
    // initialize empty string inside for loop. make this empty each time the program is ran
    var string = '';
  // i evenly divisible by 3
	if(i % 3 === 0) {
    // add the word Fizz to the empty string
    string += ('Fizz');
  }
  // i evenly divisible by 5
	if(i % 5 === 0) {
    // add the word Buzz to the empty string
		string += ('Buzz');
  }
  // other places where string variable is still empty
	if(string === '') {
    // place a number from the for loop in the result array, wherever 'string' is still empty
		result.push(i);
    // now, place all values into result array. this will be a complete array of fizz buzz and numbers
    } else {
		result.push(string);
    }
  }
	$('#function_return').html(result);
} // ends fuzz function

// function fizzBuzz() {
//   // run this for the first 101 integers, from 0 to 100
//   for(var i=0; i <=100; i++) {
//     // handle the case when 3 and 5 both divide a number, so that it's not skipped over in later else if statements. Used 15 since 3 and 5 divide a number iff 15 divides that number.
//     if (i % 15 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else {
//       // print the number if a number is not divisible by any of the above cases
//       // THIS NEEDS TO BE IN THE DOM
//       console.log(i);
//     } // ends if
//   } // ends for loop
// } // ends fizzBuzz function
