// set the text of the input field to the chosen program from the dropdown
$(document).ready(function(){
  // when the user clicks a list item, save the text of it
  $("#program_select_dropdown").on('click','li', function(){
    // save value of user's dropdown selection to value variable
    var value = $(this).text();
    // update the value of the input field next to the dropdown with the text saved in value variable
    $("#program_selection_field").val(value);
  }); // ends on click of li's

  // run a user selected program on button click
  $('#program_select').on('click', function() {
    var usr_selection = $('#program_selection_field').val();
    switch(usr_selection) {
      // if the user selects the absolute value program
      case 'Absolute Value':
      $('.page_title').text('Absolute Value');
      // show the function return of this program, hide the others
      $('#function_return').show();
      $('#evens_array, #odds_array').hide();
      // runs absolute value function on button click
      absVal();
      break;

      case 'Which Number is Larger?':
      $('.page_title').text('Which Number is Larger?');
      // runs compareTwoNumbers function on button click
      compareTwoNumbers(num1, num2);
      break;

      case 'FizzBuzz':
      $('.page_title').text('FizzBuzz');
      // runs the fizzBuzz function
      fizzBuzz();
      break;

      case 'Letter Grade':
      $('.page_title').text('Letter Grade');
      // runs the fizzBuzz function
      assignGrade(score);
      break;

      case 'Guess a Number':
      $('.page_title').text('Guess a Number');
      // runs the fizzBuzz function
      secret();
      break;

      case 'Odd or Even?':
      $('.page_title').text('Odd or Even?');
      // show the function return of this program, hide the others
      $('#function_return').hide();
      $('#evens_array, #odds_array').show();
      // runs the fizzBuzz function
      oddEven();
      break;

      case 'Pluralize Words':
      $('.page_title').text('Pluralize Words');
      // runs the fizzBuzz function
      pluralizer(num, noun);
      break;
    } // ends switch
  }); // ends program select on click
}); // ends document ready function
