// rest API 정의
// url과 같은 주소값으로 데이터베이스에 있는 DB데이터들을 Create, Read, Update, Delete 한다라는 정의


import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';

function App() {
  return (
    <div className="App">
      <Header/>
      <DayList/>
      <Day/>
    </div>
  );
}

export default App;
