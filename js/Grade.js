function assignGrade(score) {
  switch (true) { //Cool trick to activate a switch statement. This will always run, and can be used when there is no apparent starting case for the switch to start. Use true for this. If you don't have the break statements, it may allow the program to display the other values.
    case (score >= 90):
      alert("A");
      break;
    case (score >= 80):
      alert("B");
      break;
    case (score >= 70):
      alert("C");
      break;
    case (score >= 60):
      alert("D");
      break;
    default:
      alert("F");
  } // ends switch
} // ends assignGrade function
