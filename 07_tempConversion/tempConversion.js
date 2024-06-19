const convertToCelsius = function (fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  if (Number.isInteger(celsius)) {
    return Number(celsius);
  } else return Number(celsius.toFixed(1));
};
convertToCelsius(32);

const convertToFahrenheit = function (celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  if (Number.isInteger(fahrenheit)) {
    return Number(fahrenheit);
  } else return Number(fahrenheit.toFixed(1));
};

convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
