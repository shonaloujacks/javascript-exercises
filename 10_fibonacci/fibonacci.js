const fibonacci = function(number) {
    const fibonacciSequence = [1, 1];
    let index = 0;

    if (typeof number === 'string') {
       number = parseInt(number); 
    }

    if (number === 0) {
        return 0;
    }

    if (number < 0) {
        return "OOPS";
    }

    for (number; index<number-2; index++) {
        fibonacciSequence.push(fibonacciSequence[index] + fibonacciSequence[index+1]);
    }
    return fibonacciSequence[number-1]

};

// Add the two preceeding numbers to return their sum as the next number in the sequence and then store that number in an arary. 
// Repeat for the next two preceeding numbers

// Do not edit below this line
module.exports = fibonacci;
