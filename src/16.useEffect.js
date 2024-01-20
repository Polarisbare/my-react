import { useEffect, useState } from "react";
/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-20 14:41:20
 * @FilePath: /my-app/src/App.js
 *   useEffect
 * 
 */
const URL = 'http://geek.itheima.net/v1_0/channels'
function App() {
  const [list , setList] = useState([])
useEffect( ()=>{
  // 额外操作   类似生命周期
  async function getList(){
  const res = await fetch(URL)
  const jsonRes = await res.json()
  setList(jsonRes.data.channels)
  }
  getList()
},[])
  return (
    <div className="App">
      this is App
     <ul>
      {list.map(item=> <li key={item.id}>{item.name}</li>)}
     </ul>
     </div>
  );
}

export default App;
