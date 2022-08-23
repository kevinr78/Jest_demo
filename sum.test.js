const sum = require("./sum");

test("add 1+2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("2+2 is 4", () => {
  expect(sum(2, 2)).toBe(4);
});

// object assignment
test("Object Assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// Truthiness
/* test("Null", () => {
  let n = null;
  expect(n).toBeNull();
  expect(n).not.toBeNull();
  expect(n).not.toBeUndefined();
  expect(n).toBeDefined();
  expect(n).toBeFalsy();
}); */

// String
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
