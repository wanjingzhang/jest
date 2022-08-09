// const { baojian1,baojian2 } = require("./dabaojian")
import { baojian1,baojian2 }  from './dabaojian.js'

test("保健1方法-300元",()=>{
  expect(baojian1(500)).toBe('至尊服务')
})

test("保健2方法-2100元",()=>{
  expect(baojian2(2100)).toBe('双人服务')
})