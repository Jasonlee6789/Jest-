import {
  fetchData,
  fetchTwoData,
  fetchThreeData,
  fetchFourData,
} from "./fetchData";

test("FecthData-方法测试", (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true,
    });
    done();
  });
});

test("FetchTwoData-方法测试", () => {
  return fetchTwoData().then((response) => {
    expect(response.data).toEqual({
      success: true,
    });
  });
});

test("FetchThreeData-方法测试", () => {
  expect.assertions(1); //断言，必须执行一次expect
  return fetchThreeData().catch((e) => {
    //console.log(e.toString());
    expect(e.toString().indexOf("404") > -1).toBe(true);
  });
});

test("FetchFourData-方法测试", async () => {
  await expect(fetchFourData()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});
