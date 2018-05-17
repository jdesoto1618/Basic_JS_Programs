for(var i=0; i <=100; i++) {
//The case when a 3 and 5 both divide a number. Handle this case first, so that it's not skipped over in later else if statements. Used 15 since 3 and 5 divide a number iff 15 divides that number.

  if (i%15 == 0) {
    console.log("FizzBuzz");
  } else if (i%5 == 0) {
    console.log("Buzz");
  } else if (i%3 == 0) {
    console.log("Fizz");
  } else {

//If a number is not divisible by any of the above cases, just print the number.
    console.log(i);
  }
}
