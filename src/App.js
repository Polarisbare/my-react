/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-11 14:59:36
 * @FilePath: /my-app/src/App.js
 * @Description: 颜色样式
 */
// 受控表绑定单

import { useState } from "react";

// 声明react状态

// 核心绑定流程
function App() {
  const [value,setValue] = useState('')
  return (
    <div className="App">
      <input value={value} onChange={(e)=>setValue(e.target.value)} type="text"></input>
     </div>
  );
}

export default App;
