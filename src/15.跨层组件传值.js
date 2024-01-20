import { createContext, useContext } from "react";

/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-20 14:07:14
 * @FilePath: /my-app/src/App.js
 *  跨层传递值
 * App --- A ---- B
 */

// 1. creatContext 方法创建一个上下文对象
const MsgContext = createContext()
// 2. 在顶层组件 通过 Provider 组件提供数据
// 3. 在底层组件 通过 useContext 钩子函数使用数据

function A(){
  return(
    <div>
      this is A
      <B />
    </div>
  )
}
function B(){
 const msg = useContext(MsgContext)
  return(
    <div>
      this is B{msg}
    </div>
  )
}
function App() {
  const msg = 'this is App msg'
  return (
    <div className="App">
      this is App
      <MsgContext.Provider value={msg}>
      <A />
      </MsgContext.Provider>

     </div>
  );
}

export default App;
