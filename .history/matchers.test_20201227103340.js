const { TestScheduler } = require("jest");

TestScheduler("测试007号技师的匹配", () => {
  expect("007号技师").toBe("号技师");
});
