test("测试严格相等-007号技师的匹配", () => {
  const a = {"007号技师"}
  expect(a).toBe("007号技师");
  //这个不是完全相等的，引用地址不同，所以测试应该是FAIL
});

test('测试严格相等',()=>{
  const a = {number:'007'}   
  expect(a).toEqual({number:'007'})
}) 

test('toBeNull测试',()=>{
  const a = null   
  expect(a).toBeNull()
}) 

test('toBeUndefined测试',()=>{
  const a = undefined   
  expect(a).toBeUndefined()
}) 


test('toBeDefined测试',()=>{
  const a = 'jspang'  
  expect(a).toBeDefined()
}) 

test('toBeTruthy 测试',()=>{
  const a = 0
  expect(a).toBeTruthy()
}) 
test('toBeFalsy 测试',()=>{
  const a = 0
  expect(a).toBeFalsy()
}) 
