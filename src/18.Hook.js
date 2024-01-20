/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-20 15:53:28
 * @FilePath: /my-app/src/App.js
 *  Hook ： 可复用代码逻辑
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
