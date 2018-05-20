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
        $('#program_title').text('Absolute Value');
        break;

        case 'Which Number is Larger?':
        $('#program_title').text('Which Number is Larger?');
        break;

        case 'FizzBuzz':
        $('#program_title').text('FizzBuzz');
        break;

        case 'Letter Grade':
        $('#program_title').text('Letter Grade');
        break;

        case 'Guess a Number':
        $('#program_title').text('Guess a Number');
        break;

        case 'Odd or Even?':
        $('#program_title').text('Odd or Even?');
        break;

        case 'Pluralize Words':
        $('#program_title').text('Pluralize Words');
        break;
      }
  });
});
