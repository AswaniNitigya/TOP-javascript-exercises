const convertToCelsius = function(value1) {
  let result;
  result = ((value1 - 32) * (5 / 9));
  result = Math.round(result * 10) / 10;
  return result;
};

const convertToFahrenheit = function(value2) {
  let result ;
  result= ((value2 * (9/5))+32);
  result = Math.round(result*10)/10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
