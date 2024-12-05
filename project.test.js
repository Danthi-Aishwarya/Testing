const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./functions");

test("capitalize: capitalizes the first character of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("world")).toBe("World");
});

test("reverseString: reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("world")).toBe("dlrow");
});

test("calculator: performs basic math operations", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.multiply(2, 4)).toBe(8);
  expect(calculator.divide(8, 2)).toBe(4);
  expect(() => calculator.divide(8, 0)).toThrow("Cannot divide by zero");
});

test("caesarCipher: shifts characters correctly", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray: returns correct analysis of an array", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([])).toBe(null);
});
