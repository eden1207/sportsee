//import logo from './logo.svg';
import '../../styles/App.css';
import {Routes, Route } from 'react-router-dom';

import GiveUserMainData from '../../services/GiveUserMainData';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/:id' element={<GiveUserMainData />} />
      </Routes>
    </div>
  );
}

export default App;
