const factorialOfNumber = require("../factorial/index.js");
const ratioOfTwoNumbers = require("../ratio/index.js");

const ratioAndFactorial = (num1, num2, num3) => {
  let factor = factorialOfNumber(num3);
  let ratio = ratioOfTwoNumbers(num1, num2);

  return {
    ratio: ratio,
    factorial: factor,
  };
};

module.exports = ratioAndFactorial;
