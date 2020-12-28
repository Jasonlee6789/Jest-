test("测试严格相等-007号技师的匹配", () => {
  //const a = { "007号技师"};
  expect("007号技师").toBe("007号技师");
  //这个不是完全相等的，引用地址不同，所以测试应该是FAIL
});

test("测试严格相等", () => {
  const a = { number: "007" };
  expect(a).toEqual({ number: "007" });
});

test("toBeNull测试", () => {
  const a = null;
  expect(a).toBeNull();
});

test("toBeUndefined测试", () => {
  const a = undefined;
  expect(a).toBeUndefined();
});

test("toBeDefined测试", () => {
  const a = "jspang";
  expect(a).toBeDefined();
});

test("toBeTruthy 测试", () => {
  const a = 0;
  expect(a).toBeTruthy();
});

test("toBeFalsy 测试", () => {
  const a = 0;
  expect(a).toBeFalsy();
});

test("toBeGreaterThan匹配器", () => {
  const count = 10;
  expect(count).toBeGreaterThan(9);
});

test("toBeLessThan匹配器", () => {
  const count = 10;
  expect(count).toBeLessThan(11);
});

test("toBeGreaterThan匹配器", () => {
  const count = 10;
  expect(count).toBeGreaterThan(10);
});

test("toBeGreaterThanOrEqual匹配器", () => {
  const count = 10;
  expect(count).toBeGreaterThanOrEqual(10);
});

test("toEqual匹配器", () => {
  const one = 0.1;
  const two = 0.2;
  expect(one + two).toEqual(0.3);
});

test("toEqual匹配器", () => {
  const one = 0.1;
  const two = 0.2;
  expect(one + two).toEqual(0.3);
});
