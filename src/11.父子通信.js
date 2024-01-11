/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-11 16:47:58
 * @FilePath: /my-app/src/App.js
 * @Description: 父子通信
 */
function Son(props){
  return( 
  <div>son{props.name}</div>
  )
}
function App() {
  const name = 'app'
  return (
    <div className="App">
     <Son name={name}></Son>
     </div>
  );
}

export default App;
