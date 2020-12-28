import NewBaoJian from "./newBaoJian";

const baojian = new NewBaoJian();

beforeAll(() => {
  console.log("beforeAll:吃完饭后，走进了红浪漫洗浴");
});

beforeEach(() => {
  console.log("beforeEach:给了300元钱后......");
});

test("测试 大脚足疗 方法", () => {
  baojian.gongzhu(1);
  baojian.anjiao();
  console.log(baojian.fuwu);
  expect(baojian.fuwu).toEqual("大脚走进房间为你足疗");
});

test("测试 刘英按摩  方法", () => {
  baojian.gongzhu(2);
  baojian.anmo();
  console.log(baojian.fuwu);
  expect(baojian.fuwu).toEqual("刘英走进房间为你_按摩");
});
test("测试 大脚泰式保健  方法", () => {
  baojian.gongzhu(1);
  baojian.taishi();
  console.log(baojian.fuwu);
  expect(baojian.fuwu).toEqual("大脚走进房间为你_泰式保健");
});

test("测试 刘英宫廷御疗  方法", () => {
  baojian.gongzhu(2);
  baojian.gongting();
  console.log(baojian.fuwu);
  expect(baojian.fuwu).toEqual("刘英走进房间为你_宫廷御疗");
});
afterEach(() => {
  console.log("afterEach:完成后，我心满意足的坐在沙发上！！！");
});

afterAll(() => {
  console.log("afterAll:有钱人的生活就是这么的枯燥且寂寞");
});
