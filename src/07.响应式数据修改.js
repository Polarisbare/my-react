/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-03 09:39:48
 * @FilePath: /my-app/src/App.js
 * @Description: 计数器
 */
import { useState } from "react";

function App() {
// useState 实现计数器
// 1
const [count , setCount] = useState(0)
const handleClick = ()=>{
  setCount(count+1)
}
const [form , setForm] = useState({
  name:'win'
})
const changeForm = ()=>{
  setForm({
    ...form,
    name:'mac'
  })
}
  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>{form.name}</button>

     </div>
  );
}

export default App;
