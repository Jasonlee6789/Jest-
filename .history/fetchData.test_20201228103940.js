import { fetchData, fetchTwoData } from "./fetchData";

test("FecthData-方法测试", (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true,
    });
    done();
  });
});

test("FetchTwoData-方法测试", () => {
  fetchTwoData().then((response) => {
    expect(response.data).toEqual({
      success: true,
    });
  });
});
