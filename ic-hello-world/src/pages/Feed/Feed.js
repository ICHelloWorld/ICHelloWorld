import {Link} from 'react-router-dom';
import {AddMessage} from './Messaging';

export default function Feed() {


  return (
    <div>
      <div class="heading">
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li><Link to="/profile"> Profile</Link></li>
          <li><Link to="/search"> Search</Link></li>
          <li><Link to="/feed"> Feed</Link></li>
        </ul>
      </div>

      <div class="Messages">
        <form /*action="/action_page.php"*/ class="message-form">
          <textarea class="textBox">Messages</textarea>
          <input type="text" class="typedMessage" placeholder="Your message..." autofocus />
          <button class="submit" onClick={AddMessage}>Send</button>
        </form>
      </div>
    </div>

);};
