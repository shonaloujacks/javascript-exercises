const palindromes = function (string) {
  let stringBackward =  string.toCharArray().reverse().toString();

  if (string === stringBackward) {
    return true;
  } 
  else {
    return false;
  }

  console.log(palindromes('racecar'))
    // create 2 variables, stringForward and stringBackward. stringBackward convert string to an array and should apply the reverse method to stringForward. Then convert back to a string.
    // Then write a comparison (ternery operator?) that compares the two and looks for strict equality. If equal, return true, if not equal return false

};

// Do not edit below this line
module.exports = palindromes;
