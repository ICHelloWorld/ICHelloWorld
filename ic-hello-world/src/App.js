import React from 'react';
import './App.css';
import {Counter} from './features/counter/Counter';
import logo from './logo.png';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/"> Home</Link></li>
        <li><Link to="/profile"> Profile</Link></li>
        <li><Link to="/search"> Search</Link></li>
        <li><Link to="/feed"> Feed</Link></li>
      </ul>
    </div>
  );
}

export default App;
