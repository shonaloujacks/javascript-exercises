const sumAll = function (number1, number2) {
  let sum = 0;

  if (number1 < 0 || number2 < 0) {
    return "ERROR";
  } else if (typeof number1 === "string" || typeof number2 === "string") {
    return "ERROR";
  } else if (Array.isArray(number1) || Array.isArray(number2)) {
    return "ERROR";
  } else if (number1 < number2) {
    for (number1; number1 <= number2; number1++) {
      sum += number1;
    }
    return sum;
  } else if (number2 < number1) {
    for (number2; number2 <= number1; number2++) {
      sum += number2;
    }
    return sum;
  }
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
