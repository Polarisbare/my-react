/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-03 09:00:43
 * @FilePath: /my-app/src/App.js
 * @Description: react循环
 */

const isLogin = true
function App() {
  return (
    <div className="App">
     this is react
     {/* 逻辑与 && */}
     {/* {isLogin && <span>this is span</span> } */}
     {/* 三元运算 */}
     {isLogin ? <span>true</span> : <span>false</span>}
     </div>
  );
}

export default App;
