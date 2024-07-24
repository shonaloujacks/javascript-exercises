const add = function(a, b) {
  return a + b; 
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
  return array.reduce((sum, current) => sum + current, 0);
	
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
  return a**b;
	
};

const factorial = function(a) {
  let total = 1;
	for (a; a > 0 ; a--) {
    total *= a; 
  }
  return total;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
