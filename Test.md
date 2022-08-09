## 为什么要测试？

1. Improve code quality 提升代码质量

2. Find the code line of the problem exactly 准确定位问题

3. Easyly to iteration / refactoring 方便迭代和重构

4. Ensure the best product meets expectations 最大程度的保证产品符合预期

5. Reduce regression process 减少回归流程(1.)

6. Enhance developers' confidence and sense of security 提升开发者自信和安全感

> ###### 没有必要测试的
>
> ​    针对活动开发（一次性的代码模块），这样的代码模块功能简单，且后续继续迭代的可能性低，这种代码就完全没有必要引入自动化测试工具。
>
> **适合引入自动化测试的场景：**
>
> * 公共库类的开发维护
>
> * 中长期项目的迭代/重构
>
> * 引用了不可控的第三方依赖

## 测试自动化的好处

* Feed back in time, Greatly improve the development efficiency

​       反馈及时，极大地提高前端的开发效率

* It can simulate our manual operation

​       可以模拟我们的手工操作

* No break point or console log view console information to check whether a function is executed

​       不需要打断点或者使用 console.log 查看控制台信息来检查某个函数是否执行

* It usually takes only a few seconds to give us accurate feedback

​       通常只需要几秒就能给出准确的反馈

* Listening for code changes and automatically executing the test cases corresponding to the changed code. It can greatly improve our development efficiency.

​       侦听代码变化 自动执行项目中发生了变化的代码对应的测试用例，能够极大提高我们的开发效率

### 前端测试主要分为 3 种

单元测试（Unit Test）**、**集成测试（Integration Test）**、**UI 测试（UI Test）

## 1.单元测试（Unit Test）

单元测试是最容易实现的：代码中多个组件共用的工具类库、多个组件共用的子组件等。

**通常情况下，在公共函数/组件中一定要有单元测试来保证代码能够正常工作。单元测试也应该是项目中数量最多、覆盖率最高的。**

能进行单元测试的函数/组件，一定是低耦合的，这也从一定程度上保证了我们的代码质量。

## 2.集成测试（Integration Test）

集成测试通常被应用在：耦合度较高的函数/组件、经过二次封装的函数/组件、多个函数/组件组合而成的函数/组件等。

集成测试的目的在于，测试经过单元测试后的各个模块组合在一起是否能正常工作。会对组合之后的代码整体暴露在外接口进行测试，查看组合后的代码工作是否符合预期。

**集成测试是安全感较高的测试，能很大程度提升开发者的信心，集成测试用例设计合理且测试都通过能够很大程度保证产品符合预期。**

## 3.UI 测试（UI Test）

事实上，UI 测试（UI Test）和端到端测试（E2E Test）是稍有区别的：

> UI 测试（UI Test）只是对于前端的测试，是脱离真实后端环境的，仅仅只是将前端放在真实环境中运行，而后端和数据都应该使用 Mock 的。
>
> 端到端测试（E2E Test）则是将整个应用放到真实的环境中运行，包括数据在内也是需要使用真实的。

就前端而言，UI 测试（UI Test）更贴近于我们的开发流程。在前后端分离的开发模式中，前端开发通常会使用到 Mock 的服务器和数据。因而我们需要在开发基本完成后进行相应的 UI 测试（UI Test）。

UI 测试的自动化程度还不高，大多数还依赖于手工测试。

在一些自动化测试工具中有创建快照的功能，也能帮助我们在一定程度上实现 UI 测试（UI Test）的自动化。



## 如何选择测试工具？

前端测试的框架可谓是百花齐放。

- 单元测试（Unit Test）有 Mocha, Ava, Karma, Jest, Jasmine 等。
- 集成测试（Integration Test）和 UI 测试（UI Test）有 ReactTestUtils, Test Render, Enzyme, React-Testing-Library, Vue-Test-Utils 等。 



注释：

1. 回归测试 是指修改了旧代码后，重新进行测试及确认修改没有引入新的错误或导致其它代码产生错误
    Regression testing refers to retesting after modifying the old code and confirming that the modification does not cause new errors or errors in other codes

### 主流测试工具比较

| 框架    | 断言                 | 仿真                 | 快照                 | 异步测试             |
| ------- | -------------------- | -------------------- | -------------------- | -------------------- |
| Mocha   | 默认不支持，可配置   | 默认不支持，可配置   | 默认不支持，可配置   | 友好                 |
| Ava     | 默认支持             | 不支持，需第三方配置 | 默认支持             | 友好                 |
| Jasmine | 默认支持             | 默认支持             | 默认支持             | 不友好               |
| Jest    | 默认支持             | 默认支持             | 默认支持             | 友好                 |
| Karma   | 不支持，需第三方配置 | 不支持，需第三方配置 | 不支持，需第三方配置 | 不支持，需第三方配置 |

### Mocha

- Mocha 是生态最好，使用最广泛的单测框架，但是他需要较多的配置来实现它的高扩展性。

### Ava

- Ava 是更轻量高效简单的单测框架，但是自身不够稳定，并发运行文件多的时候会撑爆 CPU。

### Jasmine

- Jasmine 是单测框架的“元老”，开箱即用，但是异步测试支持较弱。

### Jest

- Jest 基于 Jasmine, 做了大量修改并添加了很多特性，同样开箱即用，但异步测试支持良好。

### Karma

- Karma 能在真实的浏览器中测试，强大适配器，可配置其他单测框架，一般会配合 Mocha 或 Jasmine 等一起使用。

 

React 的默认测试框架是 Jest，Augular 的默认测试框架就是 Karma + Jasmine 。

Jest 被各种 React 应用推荐和使用。它基于 Jasmine，至今已经做了大量修改并添加了很多特性，同样也是开箱即用，支持断言，仿真，快照等。Create React App 新建的项目就会默认配置 Jest，我们基本不用做太多改造，就可以直接使用。



## 采用何种测试思想？

### TDD：Test-Driven Development（测试驱动开发）

- TDD：Test-Driven Development（测试驱动开发）：TDD 则要求在编写某个功能的代码之前先编写测试代码，然后只编写使测试通过的功能代码，通过测试来推动整个开发的进行

### BDD：Behavior-Driven Development（行为驱动开发）

- BDD：Behavior-Driven Development（行为驱动开发）：BDD 可以让项目成员（甚至是不懂编程的）使用自然语言来描述系统功能和业务逻辑，从而根据这些描述步骤进行系统自动化的测试

 

常用的思想方式是BDD，使用官方默认 **[React Testing Library](https://link.zhihu.com/?target=https%3A//github.com/testing-library/react-testing-library)** React 已经默认为我们配置好了，我们不需要进行手动测试



- Jest的基础： 包括基础API，异步测试，Mock技巧，快照功能，定时器，延时器，Dom节点测试。
- React项目的测试： Enzyme工具的讲解，TDD单元测试，BDD集成测试的知识和操作 

##### 优点：

速度快：智能缓存只重测试修改的文件

API简单：数量少

隔离性好：避免2个jest文件互相影响

IDE的整合：和vscode完美的整合

多项目运行：node后台和react前台可以并行测试，提高效率

覆盖率：可以快速导出测试覆盖率，js测试代码写了百分之多少，jest一条命令就可以导出测试覆盖率

初始化jest的配置文件

`npx jest --init`

代码覆盖率

`npx jest --coverage`

### expect API

```
====================真实性Truthiness=============
toBeNull				// 是否为Null 
toBeUndefined		
toBeDefined
toBeFalsy				// 为假 ensure a value is false in a boolean context
toBeTruthy

====================数字Numbers====================
toBeGreaterThan			// 大于 
toBeGreaterThanOrEqual	// 大于等于
toBeLessThan			// 小于
toBeLessThanOrEqual		// 小于
toBe					// 
toEqual					// 
toBeCloseTo				// 接近的数，解决js小数的浮点问题
closeTo					// 浮点数compare float point numbers

====================数组Arrays&迭代iterables=============
toContain				// 对象是否在数组中使用 check an item is in an array
not.arrayContaining 	// 不包含该元素 array is not a subset子集 of the received array

====================异常Exceptions=============
toThrow				// 调用时必须抛出异常 a function throws when it is called
not.toThrow 		// 不要抛出异常

====================方法Function=============
assertions			// 必须要调用测试 verifies a certain number of assertion are called
hasAssertions		// 至少调用了一个方法 at least one assertion is called
toHaveBeenCalled	// 被调用的
 
====================对象Object====================
toEqual				// 相等 Object.is
toStrictEqual		// 对象的结构是否完全相等 test the object have the same types&structure
objectContaining	// 预期对象存在接收对象 received object contains properties in expected object
toBeInstanceOf		// 对象是否为类的实例 check the object is an instance of a class
toMatchObject		// 对象匹配另一个对象的子集a js Object matches a subset of the properties of an object
 
====================字符串String====================
stringMatching		// 匹配字符串\正则 matches string\Regular Expression
toMatch				// 字符串匹配器 a string matches a regular expression 
  
====================更多More====================  
toMatchSnapshot		//匹配最近的快照 matches the most recent snapshot 

```

### 异步方法Asynchronous 

```
Promises
Async/Await和.resoleves/.rejects
Callbacks:  
	1. 默认情况下，Jest 测试在执行结束后完成。
	  By default, Jest tests complete once they reach the end of their execution.
	2. 这意味着此测试将无法按预期工作。 .
	  That means this test will not work as intended:
	3. 需要给箭头函数加一个done方法。
	  We should add a done function as an argument of arrow function.
	4. Jest会在test完成前回调done方法。
	  Jest will wait until the done callback is called before finishing the test.

```

钩子函数Lifecycle function

```
beforeAll				// 在所有方法前运行 Order of Execution, the beforeAll function runs before the all function
afterAll				//
beforeEach				// 在每个方法前运行 run before the each function
afterEach				// 
===============作用域Scoping========================
describe 				// 定义了作用域 describe scoping,they has different level 
```

### Mock模拟方法

```
jest.fn()是创建Mock函数最简单的方式，如果没有定义函数内部的实现，jest.fn()会返回undefined作为返回值。
```

### Snapshot快照方法

* 测试UI

```
=====================最佳实践Best Practices=======================
1. 将快照视为代码 Treat snapshots as code, should be review，focused, short, enforce stylistic conventions. 需要被检查，集中，简短，强烈要求风格约束
2. 测试应该是确定性的 Tests should be deterministic,确保不包括make sure snapshots don't include platform specific平台特定数据 or non-deterministic data. 非确定性数据
   Date.now = jest.fn(() => 1482363367071);
3. 使用描述性的快照名称 Use descriptive snapshot names 
   准确的描述输出预期的内容 describes exactly  output

exports[`<UserName /> should render null`] = 
`<div>
  Alan Turing
</div>`;

```

### 计时器

```
jest.useFakeTimers()			// Enable Fake Timers使用假计时器
jest.useRealTimers()			// restored to their normal behavior使用真计时器
jest.runAllTimers();			// Run All Timers运行所有计时器
jest.runOnlyPendingTimers();	// Run Pending Timers运行挂起的计时器
jest.advanceTimersByTime(1000);	// Advance Timers by Time按时间提前计时器
jest.useFakeTimers({doNotFake: ['performance']}); // Selective Faking选择性伪造
```

### 案例

```*const* { baojian1,baojian2 } = require("./dabaojian")
const { baojian1,baojian2 } = require("./dabaojian")
test("保健1方法-300元",()=>{
 expect(baojian1(500)).toBe('至尊服务')
})

test("保健2方法-2100元",()=>{
 expect(baojian2(2100)).toBe('双人服务')
})
```



```
// 1
test('测试007号技师的匹配',()=>{
  // toBe 绝对相等===
  expect('007号技师').toBe('007号技师')

  const a = {number:'007'}
  expect(a).toBe({number:'007'}) // 必须地址相等，否则报错
})
// 2
test('toEqual匹配器',()=>{
  const a = {number:'007'}
  expect(a).toEqual({number:'007'}) // 值相等即可
})
// 3
test('toNull匹配器',()=>{
  const str = ["a","b","c"]; 
  const data = new Set(str)
  expect(str).toContain("b")  // 数组
  expect(data).toContain("b")
})
// 4
const throwNewErrorFn = ()=>{
  throw new Error('this is a Error')
}  
test('toThrow',()=>{
  expect(throwNewErrorFn).not.toThrow() // 不要抛出异常
})
```

### 配置

```
"scripts":{
	"test":"jest --watchAll" // 监视功能，自动同步新更新的内容
	"coverage": "jest --coverage" // 生成报告
}
```

Jest不能使用ES6的import命令，如果需要支持ES6需要支持babel。

> 在babel中有babel-jest的组件，运行test命令的时候会先检测开发环境有没有babel核心包，如果安装了就去找.babelrc文件,他就进行转换，转换过后才进行检测。

```
yarn add @babel/core@7.4.5 @babel/preset-env@7.4.5 --dev

./babelrc 配置
{
  "presets":[
    [
      "@babel/preset-env",{
        "targets":{
          "node":"current"
        }
      }
    ]
  ]
}
```

### 异步代码测试方法

```
yarn add axios@0.19.0
```



fetchData.js

```
import axios from 'axios'

export const fetchData = (fn)=>{
  axios.get('https://crm.12rem.com/newdashboard/Api/DashboardApi.ashx?method=UserInfo&territoryId=327').then((reponse) =>{
    fn(reponse.data)
  })
}

export const fetchData2 = (fn)=>{
  // return 或 await
  return axios.get('https://crm.12rem.com/newdashboard/Api/DashboardApi.ashx?method=UserInfo&territoryId=238')
}
 
// catch异常如何捕获测试用例
export const fetchData3 = (fn)=>{
  return axios.get('https://crm.12rem.com/newdashboard/Api/DashboardApi_Error.ashx?method=UserInfo&territoryId=238')
}

export const fetchData4 = ()=>{
  return axios.get('https://crm.11rem.com/newdashboard/Api/DashboardApi.ashx?method=UserInfo&territoryId=32227')
}
```

fetchData.test.js

```
import { fetchData,fetchData2,fetchData3 } from "./fetchData";

test("Fetch data 方法测试",(done)=>{
  fetchData((data)=>{
    expect(data).toEqual(
      {"errcode":0,"errmsg":"ok","result":{"Data":{"Name":"雷甲","Department":"Sales Implant Region East 2 SH","territoryId":"327","area":"East","partyRole":"Z05"}}}
    )
    done() // 异步的小坑，如果没有done会不执行测试用例
  }) 
})

test("Fetch data 2 方法测试",()=>{
  return fetchData2().then((response)=>{
    expect(response.data).toEqual({
      "errcode":0,"errmsg":"ok","result":{"Data":{"Name":"","Department":"","territoryId":"","area":"","partyRole":"" }}
    })
  })
})

test("Fetch data 3 方法测试",()=>{ 
  expect.assertions(1) // 断言，必须执行一次expect
  return fetchData3().catch((e)=>{
    console.log(e.toString()) // Error: Request failed with status code 404 
    expect((e.toString().indexOf('404')>-1)).toBe(true)
  })
})

// 判断返回对象里面的某个值
test('Fetch data 4 测试', async()=>{
  // 第一种写法
   await expect(fetchData4()).resolves.toMatchObject({
     data:{"errcode":1} // 验证失败 errcode:0
   })

  // 第二种写法
  const response = await fetchData4()
  console.log(response.data)
  expect(response.data).toEqual(
    {"errcode":0,"errmsg":"ok","result":{"Data":{"Name":"","Department":"","territoryId":"","area":"","partyRole":"222"}}}
  ) 
})
```

四个钩子函数

beforeAll, afterAll, beforeEach, afterEach

钩子函数作用域

```
钩子函数在父级恩组可以作用域子集，类似继承
钩子函数同级分组作用域互补干扰，各起作用
先执行外部钩子函数，再执行内部钩子函数
```



### 文档学习路径

1. jest-react 基础

2. Learning react test 高级

​       *eject* 弹出项目配置 jest.config.js

3. Lesson1 综合

