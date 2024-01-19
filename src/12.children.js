/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-19 14:36:16
 * @FilePath: /my-app/src/App.js
 * @Description: children 特殊
 */
function Son(props){
  console.log(props);
  return( 
  <div>son{props.children}</div>
  )
}
function App() {
  // 测试
  return (
    <div className="App">
     <Son >
      <span> children</span>
     </Son>
     </div>
  );
}

export default App;
