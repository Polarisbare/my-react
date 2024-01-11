/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-03 09:16:15
 * @FilePath: /my-app/src/App.js
 * @Description: react循环
 */
function App() {
  // 基础绑定
  // const handleClick = ()=>{
  //   console.log('=========>',111);
  // }
  // 参数
  //   const handleClick = (e)=>{
  //   console.log('=========>',e);
  // }
  // 自定义
  //   const handleClick = (name)=>{
  //   console.log('=========>',name);
  // }
  // 两个参数
    const handleClick = (name,e)=>{
    console.log('=========>',name,e);
  }
  return (
    <div className="App">
      <button onClick={(e)=>handleClick('jack',e)}>按钮</button>
     </div>
  );
}

export default App;
