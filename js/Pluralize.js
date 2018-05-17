function pluralizer(num, noun) {
  //The program only pluralizes the words given in the switch statements. It won't capture all cases, but it does include a default case for non irregular plural forms.

  //Add check for empty second parameter
  if (typeof(noun) === "undefined") {
    return "You must specify a noun to use this program!"
  }

  if (num > 1) {
    switch (noun.toLowerCase()) {
      case "sheep":
        alert(num + " " + "sheep");
        break;
      case "goose":
        alert(num + " of these are called geese.");
        break;
      case "child":
        alert("The plural of child is children.");
        break;
      default:
        alert(noun + " pluralized is: " + noun + "s");
    }
  } else {
    return noun;
  }
}
