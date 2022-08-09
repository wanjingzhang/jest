import { fetchData,fetchData2,fetchData3,fetchData4 } from "./fetchData";

// test("Fetch data 方法测试",(done)=>{
//   fetchData((data)=>{
//    expect(data).toEqual(
//      {"errcode":0,"errmsg":"ok","result":{"Data":{"Name":"雷甲","Department":"Sales Implant Region East 2 SH","territoryId":"327","area":"East","partyRole":"Z05"}}}
//    )
//     done() // 异步的小坑，如果没有done会不执行测试用例
//   }) 
// })

// test("Fetch data 2 方法测试",()=>{
//   return fetchData2().then((response)=>{
//     expect(response.data).toEqual({
//       "errcode":0,"errmsg":"ok","result":{"Data":{"Name":"","Department":"","territoryId":"","area":"","partyRole":"" }}
//     })
//   })
// })

// test("Fetch data 3 方法测试",()=>{ 
//   expect.assertions(1) // 断言，必须执行一次expect
//   return fetchData3().catch((e)=>{
//     console.log(e.toString()) // Error: Request failed with status code 404 
//     expect((e.toString().indexOf('404')>-1)).toBe(true)
//   })
// })

// 判断返回对象里面的某个值
test('Fetch data 4 测试', async()=>{
  // 第一种写法
  // await expect(fetchData4()).resolves.toMatchObject({
  //   data:{"errcode":1} // 验证失败 errcode:0
  // })

  // 第二种写法
  const response = await fetchData4()
  console.log(response.data)
  expect(response.data).toEqual(
    {"errcode":0,"errmsg":"ok","result":{"Data":{"Name":"","Department":"","territoryId":"","area":"","partyRole":"222"}}}
  ) 
})