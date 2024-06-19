const repeatString = (word, times) => {
    let string = "";
    if (times < 0) {
        return "ERROR";
    }
    for (let i = 0; i < times; i++) {
        string += word; 
    }
 return string;
};

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
