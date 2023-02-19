import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';
import React from "react";



// 04 - counter : 버튼 예제
function App(){
  return (<Counter/>)
}
export default App;





// 03 - props : 두 컴포넌트 사이에 데이터 전송 테스트

// function App(){
//   return (<Hello name='react' color='red'/>)
// }

// export default App;





// 02 - 컴포넌트 export, import 연습
// function App(){
//   return<MyComponent/>;
// }

// export default App;





// 01 - JSX 테스트
// function App() {

//   const text = 'JSX & React project!'
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {text}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

