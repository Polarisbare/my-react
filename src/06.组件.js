/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-03 09:21:01
 * @FilePath: /my-app/src/App.js
 * @Description: react循环
 */
// 定义组件
function Button (){
  return <button> click me</button>
}
function App() {

  return (
    <div className="App">
      <Button></Button>
      <Button/>
     </div>
  );
}

export default App;
