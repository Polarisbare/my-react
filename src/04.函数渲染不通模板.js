/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-03 09:05:50
 * @FilePath: /my-app/src/App.js
 * @Description: react循环
 */
const count = 0
function getArticeDom (){
  if (count === 0){
    return <div>我是无图</div>
  }else if(count ===1){
    return <div>我是单图</div>
  }else{
    return <div>我是多图</div>
  }

}
function App() {
  return (
    <div className="App">
      {/* 调用函数渲染不同模版 */}
    {getArticeDom()}
     </div>
  );
}

export default App;
