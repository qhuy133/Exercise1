const value = require("../part1");
it("['a', 'ab', 'abc', 'cd', 'def', 'gh']", () => {
  expect(value.test1(["a", "ab", "abc", "cd", "def", "gh"])).toEqual(["ab", "cd", "gh"]);
});

it("['a', 'b', 'c', 'cd', 'def', 'gh']", () => {
  expect(value.test1(["a", "b", "c", "cd", "def", "gh"])).toEqual(["a", "b", "c"]);
});

it("['aea', 'bee', 'c', 'cd', 'def', 'gh']", () => {
  expect(value.test1(["aea", "bee", "c", "cd", "def", "gh"])).toEqual(["aea", "bee", "def"]);
});

