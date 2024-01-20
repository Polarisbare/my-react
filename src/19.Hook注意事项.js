/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-20 16:01:36
 * @FilePath: /my-app/src/App.js
 *  Hooks使用原则： 1 只能在组件中或者其他的自定义Hook函数中调用
 *                2 只能在组件的顶层调用 不能嵌套在if for 其他函数中
 */

import { useState } from "react";

// 封装自定义Hook
function useToggle (){
  const [value,setValue] = useState(true)
  const toggle = ()=>setValue(!value)
  return{
    value,
    toggle
  }
}
function App() {
  const {value , toggle } = useToggle()
  return (
    <div className="App">
      {value && <div>测试html</div>}
      <button onClick={toggle}>toggle</button>
     </div>
  );
}

export default App;
