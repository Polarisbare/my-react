/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-01-02 18:01:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-01-02 18:27:25
 * @FilePath: /my-app/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const count = 18
const oneFn = ()=>{
  return "nihao"
}
function App() {
  return (
    <div className="App">
     this is react
     {/* 字符串 */}
     {'abc'}
     {/* 变量 */}
     {count}
     {/* 函数 */}
     {oneFn()}
     {/* 方法 */}
     {new Date().getDate()}
     {/* 内联样式 */}
     <div style={{color:'red'}}>测试一下</div>
    </div>
  );
}

export default App;
