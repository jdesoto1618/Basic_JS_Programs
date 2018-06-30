function oddEven() {
  // set up two arrays, one for even and the other for odd results
  var evens = []; odds = [];
  for (var i = 0; i <= 15; i++) {
    // even cases
    if (i % 2 === 0) {
      evens.push(i);
    // odd cases
    } else {
      odds.push(i);
    } // ends if
  } // ends for loop
  // put the output outside the for loop
  $('#evens_array').html("<span id='function_result'>" + evens + "</span>" + " are the even numbers in 0-15");
  $('#odds_array').html("<span id='function_result'>" + odds + "</span>" + " are the odd numbers in 0-15");
} // ends oddEven function
