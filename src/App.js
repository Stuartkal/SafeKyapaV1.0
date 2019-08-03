import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Sidebar/>
    </div>
    </Router>
  );
}

export default App;
