const { TestScheduler } = require("jest");

test("保健1方法-3000元", () => {
  expect(baojian1(300)).toBe("至尊服务");
});
