const dabaojian = require("./dabaojian");
const { baojian1, baojian2 } = dabaojian;
test("保健1方法-3000元", () => {
  expect(baojian1(300)).toBe("至尊服务");
});
