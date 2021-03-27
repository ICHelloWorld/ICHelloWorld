import React from 'react';
import './App.css';
import {Counter} from './features/counter/Counter';
import logo from './logo.svg';
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
      <p>News box should be here </p>
      <div>
      <form action="/action_page.php">
        <input type="text" id="message"></input><br/><br/>
        <input type="submit" value="Submit"></input>
      </form>
      </div>
    </div>
  );
}

export default App;
