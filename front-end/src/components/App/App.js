//import logo from './logo.svg';
import '../../styles/App.css';
import {Routes, Route } from 'react-router-dom';

import GiveUserMainData from '../../services/GiveUserMainData';


/**
 * Creation of the different routes
 * 
 * Each route corresponds to a user profile associated to an id
 * 
 * Each path calls an element you can find in a folder services/ used for API calls
   dedicated to a endpoint
 */

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/users/:id' element={<GiveUserMainData />} />
      </Routes>
    </div>
  );
}

export default App;