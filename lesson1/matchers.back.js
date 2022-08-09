const throwNewErrorFn = ()=>{
  throw new Error('this is a Error')
}


test('toThrow',()=>{
  expect(throwNewErrorFn).toThrow()
})