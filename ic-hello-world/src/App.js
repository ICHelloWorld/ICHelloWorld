import React from 'react';
import {useHistory} from "react-router";
import './App.css';
import logo from './logo.png';

function App() {
  const history = useHistory();
  const LinkButton = ({val, link}) => {
    return (
      <button
        className={"bg-gradient-to-r from-blue-600 to-orange-600 text-white p-4 " +
        "rounded-xl hover:scale-105 transform duration-150 font-bold focus:outline-none"}
        onClick={() => history.push(`${link}`)}
      >
        {val}
      </button>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        {/*<Counter/>*/}
        <h1
          className={"text-4xl text-gray-900 text-center font-bold"}>FlatHunt</h1>
        <div className={"grid grid-cols-3 p-8 gap-4 mt-8"}>
          <LinkButton val={"Profile"} link={"/profile"}/>
          <LinkButton val={"Housing"} link={"/housing"}/>
          <LinkButton val={"Search"} link={"/search"}/>
        </div>
      </header>
    </div>
  );
}

export default App;
