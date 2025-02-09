const soma = require("./sub");

test("sum 2 + 1 to get 1", () => {
  expect(soma(2, 1)).toBe(1);
});