//import logo from './logo.svg';
import '../../styles/App.css';
import {Routes, Route } from 'react-router-dom';
import UserPage from '../UserPage/UserPage.js';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
