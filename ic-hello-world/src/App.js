import React from 'react';
import './App.css';
import {Counter} from './features/counter/Counter';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
//import {addMessage} from './Messaging';

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
      <form action="/action_page.php" class="message-form">
        <textarea>Messages</textarea>
        <input type="text" id="message" placeholder="Your message..." autofocus></input>
        <input type="submit" value="Send"></input>
      </form>
      </div>
      <div class="messages"></div>
    </div>
  );
}

export default App;
