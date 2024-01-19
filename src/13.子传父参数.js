import { useState } from "react";

/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-19 15:37:35
 * @FilePath: /my-app/src/App.js
 * @Description: 子传父
 */
function Son({onGetMsg}){
  const sonValue = '我是子组件中的数据'
  return( 
  <div>
    son
    <button onClick={()=>onGetMsg(sonValue)}>sonButton</button>
  </div>
  )
}
function App() {
  const [msg,setMsg] = useState()
  const getMsg = (val)=>{
    console.log('=========>val',val);
    setMsg(val)
  }
  return (
    <div className="App">
      app
      父组件{msg}
     <Son onGetMsg={getMsg} />
     {msg}
     </div>
  );
}

export default App;
