const soma = require("./sum");

test("sum 1 + 2 to get 3", () => {
  expect(soma(1, 2)).toBe(3);
});

test("sum 3 + 4 to get 7", () => {
    expect(soma(3, 4)).toBe(7);
});

test("sum 5 + 6 to get 11", () => {
    expect(soma(5, 6)).toBe(11);
});