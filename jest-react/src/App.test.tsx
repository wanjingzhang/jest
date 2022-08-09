import React from 'react';
import { render, fireEvent, screen,RenderResult } from '@testing-library/react';
import App from './App';

let wrapper: RenderResult;
 
describe('Should render "Hello World!" correctly',()=>{
  test('Should render "Hello World!" correctly', () => {
    // 初始化文本内容为 "Hello World!"
    render(<App />);
    // getByTextId 这个 API，在没有找到对应的 DOM 节点的时候，会直接抛出异常。
    // getByTestId: 通过属性 data-testid 来获取对应的  DOM
    // 这里我们获取到的是上面 HelloWorld 组件中的 div 标签 
    const app = screen.getByTestId('container');
    expect(app).toBeInTheDocument();
    // 判断获取到的标签是否是 div
    expect(app.tagName).toEqual('DIV');
    // 判断 div 标签的 text 是否匹配正则 /world/i
    expect(app.textContent).toMatch(/world/i); 
  });

  // 点击后文本内容为 "Hello Jack!"
  test('Should render "Hello Jack!" correctly after click', () => {
    render(<App />);
    const app = screen.getByTestId('container');
    // fireEvent: 模拟点击事件
    fireEvent.click(app);
    expect(app.textContent).toMatch(/jack/i);
  });
})


