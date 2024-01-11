/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-03 08:52:54
 * @FilePath: /my-app/src/App.js
 * @Description: react循环
 */

const list = [
  {id:1,name:"hahahah"},
  {id:2,name:"lilili"},
  {id:3,name:"yuyuyuyu"},
  {id:4,name:"mamammama"},
  {id:5,name:"lalalaal"},
]
function App() {
  return (
    <div className="App">
     this is react
    <ul>
      {list.map(item=><li key={item.id}>{item.name}</li>)}
    </ul>
    </div>
  );
}

export default App;
