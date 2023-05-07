// rest API 정의
// url과 같은 주소값으로 데이터베이스에 있는 DB데이터들을 Create, Read, Update, Delete 한다라는 정의


import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './component/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<DayList/>}/>
          <Route path="/day/:inputDay" element={<Day/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
