import { useEffect, useState } from "react";
/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-20 14:59:16
 * @FilePath: /my-app/src/App.js
 *   useEffect 清除副作用
 */
function Son(){
  // 渲染时开启定时器 此写法只开始的时候执行一次
  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log('=========>定时器开始',);
    },1000)

    return ()=>{
      // 清除副作用 (大多是组件卸载时触发)
      clearInterval(timer)
    }
  },[])
  return<div>this is son</div>
}
function App() {
  // 通过条件渲染模拟组件卸载
  const [show ,setShow] = useState(true)
  return (
    <div className="App">
      {show && <Son />}
      <button onClick={()=>setShow(false)}>卸载Son组件</button>
     </div>
  );
}

export default App;
