function oddEven() {
  //Function can start by testing 0. By definition, 0 is even. The program only tests the numbers 0 through 15 inclusive for odd or even. That is, if 2 is a factor, it's even. The program will list all the numbers in the range given and display the odd/even status.
  for (var i=0; i<=15; i++) {
    if (i%2 === 0) { //even cases
      console.log(i + " is an even number");
    } else {
      console.log(i + " is an odd number");
    }
  }
}
