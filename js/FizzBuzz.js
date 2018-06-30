function fizzBuzz() {
  // run this for the first 101 integers, from 0 to 100
  for(var i=0; i <=100; i++) {
    // handle the case when 3 and 5 both divide a number, so that it's not skipped over in later else if statements. Used 15 since 3 and 5 divide a number iff 15 divides that number.
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      // print the number if a number is not divisible by any of the above cases
      // THIS NEEDS TO BE IN THE DOM
      console.log(i);
    } // ends if
  } // ends for loop
} // ends fizzBuzz function
