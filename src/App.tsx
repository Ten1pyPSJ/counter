import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './page/Header';
import CounterState from './components/CounterState';
import CounterRedux from './components/CounterRedux';
import CounterReducer from './components/CounterReducer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<CounterState />} />
        <Route path='/counter-reducer' element={<CounterReducer />} />
        <Route path='/counter-redux' element={<CounterRedux />} />
      </Routes>
    </div>
  );
}

export default App;
