const reverseString = function(word) {
let reversed = "";
reversed = word.split("").reverse().join(""); 
return reversed;
};

reverseString("Hello world");

// Do not edit below this line
module.exports = reverseString;
