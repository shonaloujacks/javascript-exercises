const removeFromArray = function(inputArray, ...args) {
    function keepElement(number) {
        if (args.includes(number)) {
            return false;
        }   else return true;
    }
    const filteredElements = inputArray.filter(keepElement);

    return filteredElements;
};

removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray;
