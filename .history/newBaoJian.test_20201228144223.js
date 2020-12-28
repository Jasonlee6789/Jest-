import NewBaoJian from "./newBaoJian";

const baojian = new NewBaoJian();

test("测试 大脚足疗 方法", () => {
  baojian.gongzhu(1);
  baojian.anjiao();
  console.log(baojian.fuwu);
  expect(baojian.fuwu).toEqual("大脚走进房间为你足疗");
});
