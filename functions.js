function capitalize(str) {
  if (str.length === 0) return "";
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  },
};

function caesarCipher(str, shift) {
  const shiftChar = (char, shift) => {
    const isUpper = char >= "A" && char <= "Z";
    const isLower = char >= "a" && char <= "z";

    if (!isUpper && !isLower) return char;

    const base = isUpper ? "A".charCodeAt(0) : "a".charCodeAt(0);
    return String.fromCharCode(
      ((((char.charCodeAt(0) - base + shift) % 26) + 26) % 26) + base
    );
  };

  return [...str].map((char) => shiftChar(char, shift)).join("");
}

function analyzeArray(arr) {
  if (arr.length === 0) return null;

  const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return { average, min, max, length };
}
module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
