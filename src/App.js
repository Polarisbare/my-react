import { useState } from "react";

/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-11 17:06:05
 * @FilePath: /my-app/src/App.js
 * @Description: children 特殊
 */
function Son({onGetMsg}){
  const sonValue = 'son'
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
   
     <Son onGetMsg={getMsg} />
     {msg}
     </div>
  );
}

export default App;
