// set the text of the input field to the chosen program from the dropdown
$(document).ready(function(){
  // when the user clicks a list item, save the text of it
  $("#program_select_dropdown").on('click','li', function(){
      // save value of user's dropdown selection to value variable
      var value = $(this).text();
      // update the value of the input field next to the dropdown with the text saved in value
      $("#program_selection_field").val(value);
      switch(value) {
        case 'Absolute Value':
        console.log('Running abs value program');
        break;

        case 'Which Number is Larger?':
        console.log('Running number comparator program');
        break;

        case 'FizzBuzz':
        console.log('Running FizzBuzz program');
        break;

        case 'Letter Grade':
        console.log('Running Letter Grade program');
        break;

        case 'Guess a Number':
        console.log('Running Guess a Number program');
        break;

        case 'Odd or Even?':
        console.log('Running Odd or Even? program');
        break;

        case 'Pluralize Words':
        console.log('Running Pluralize Words program');
        break;
      }
  });
});
