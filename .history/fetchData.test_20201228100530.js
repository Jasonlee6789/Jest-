import { fetchData } from "./fetchData";

test("FecthData-方法测试", () => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true,
    });
  });
});
