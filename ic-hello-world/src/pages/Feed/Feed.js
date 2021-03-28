import {Link} from 'react-router-dom';
import {app} from "../../firebaseConfig"
//import {AddMessage} from './Messaging';
let message = [];
export default function Feed() {
  const messaging = app.messaging();
  //Create an array where the message along with it's ID will be stored.

  // This fuction will enables us to add the message to the DOM
  function addMessage(text) {
    //Object where message will be stored
    const chat = {
      text,
      id: Date.now(),
    }

    message.push(chat);

    //Render message to the screen
    const list = document.querySelector('.messages');
    list.insertAdjacentHTML('beforeend',
      `<p className="message-item" data-key="${chat.id}">
              <span>${chat.text}</span>
          </p>`,
    );

  }

  //Create event listener to detect when a message has been submitted
  const form = document.querySelector('.message-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();

      //input to save the message itself
      const input = document.querySelector('.typedMessage');

      //This helps us to detect empty messages and ignore them
      const text = input.value.trim();

      if (text !== '') {
        addMessage(text);
        input.value = '';
        input.focus();

      } else {
        addMessage("cannot get message")
      }
    })
  }
  ;

  return (
    <div>
      <div className="heading">
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li><Link to="/profile"> Profile</Link></li>
          <li><Link to="/search"> Search</Link></li>
          <li><Link to="/feed"> Feed</Link></li>
        </ul>
      </div>

      <div className="Messages">
        {/*//<div className="Messages"></div>*/}
        {/*//Maybe turn textBox into div, so addMessage works better (or not)*/}
        <form className="message-form">
          <textarea className="textBox">Messages</textarea>
          <input type="text" className="typedMessage"
                 placeholder="Your message..."
                 autofocus/>
          <button
            className="submit m-1 p-2 bg-blue-600 rounded-xl text-white text-sm">Send
          </button>
        </form>
      </div>
    </div>

  );
};
