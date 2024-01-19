import { useState } from "react";

/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-19 16:06:22
 * @FilePath: /my-app/src/App.js
 * @Description: 子传父
 * 
 * 核心概念：  子组件中调用父组件中的函数并传递实参数
 */

function ComA({onGetAName}){
  const name = "this is A"
  return (
    <div>
      我是A组件：<button onClick={()=>onGetAName(name)}>send</button>
    </div>
  )
}
function ComB({name}){
  return (
    <div>
      我是B组件：{name}
    </div>
  )
}
function App() {
const [count , setCount] = useState()
const getName = (name)=>{
  console.log('=========>',name);
  setCount(name)
}
  return (
    <div className="App">
      我是App：
      <ComA onGetAName={getName}></ComA>
      <ComB name={count}></ComB>
      
     </div>
  );
}

export default App;
