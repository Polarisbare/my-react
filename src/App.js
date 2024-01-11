/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-11 16:19:36
 * @FilePath: /my-app/src/App.js
 * @Description: 颜色样式
 */
import { useRef } from "react";
// react 中获取dom
// useRef 生成ref对象绑定dom身上
// dom可用时，ref.current获取dom
// dom渲染完成之后才可用
function App() {
  const inputVal = useRef(null)
  const showDom = ()=>{
    console.log('=========>',inputVal.current);
    console.dir(inputVal.current.value);
    
  }
  return (
    <div className="App">
      <input type="text" ref={inputVal}></input>
      <button onClick={showDom}>点我</button>
     </div>
  );
}

export default App;
