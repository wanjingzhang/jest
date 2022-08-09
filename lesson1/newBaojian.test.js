import NewBaoJian from "./newBaojian";

const baojian = new NewBaoJian()

describe('我是父级分组',()=>{
  // beforeAll(()=>{
  //   console.log('beforeAll: 吃完饭后，走进了红浪漫洗浴中心')
  // })
  
  // beforeEach(()=>{
  //   console.log('beforeEach: 给了300元钱后')
  // })
  
  describe('大脚的服务',()=>{
    afterEach(()=>{
      console.log('大脚你服务的很好，给你30元小费')
    })

    test('测试 大脚足疗 方法',()=>{
      baojian.gongzhu(1)
      baojian.anjiao()
      console.log(baojian.fuwu)
      expect(baojian.fuwu).toEqual('大脚走进房间为你足疗')
    })
  
    test('测试 大脚泰式 方法',()=>{
      baojian.gongzhu(1)
      baojian.taishi()
      console.log(baojian.fuwu)
      expect(baojian.fuwu).toEqual('大脚走进房间为你_泰式按摩')
    })
  
  })
   
  
  describe('Celine的服务',()=>{
    afterEach(()=>{
      console.log('大脚你服务的很好，给你3000元小费')
    })
    
    test('Celine 足疗 方法',()=>{
      baojian.gongzhu(2)
      baojian.anjiao()
      console.log(baojian.fuwu)
      expect(baojian.fuwu).toEqual('Celine走进房间为你足疗')
    })  
    
    test('测试 Celine宫廷 方法',()=>{
      baojian.gongzhu(2)
      baojian.gongting()
      console.log(baojian.fuwu)
      expect(baojian.fuwu).toEqual('Celine走进房间为你_宫廷按摩')
    })
  }) 
  
  
  // afterEach(()=>{
  //   console.log('afterEach: 完成后，我心满意足的坐在沙发上')
  // })
  
  // afterAll(()=>{
  //   console.log('afterAll: 有钱人的生活就是这么枯燥切乏味')
  // })
})

