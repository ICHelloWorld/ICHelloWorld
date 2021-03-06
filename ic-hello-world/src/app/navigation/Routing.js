import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from "../../App";
import ProfilePage from "../../pages/Profile/Profile";
import Search from "../../pages/Search/Search";
import Feed from '../../pages/Feed/Feed'


export default function Routing() {
  return (
    <Router>
      <Switch>
        {/* Feed */}
        <Route exact path="/" component={App}/>
        {/* Profile Page */}
        <Route exact path="/profile" component={ProfilePage}/>
        {/* Search profiles */}
        <Route exact path="/search" component={Search}/>
        {/* Search houses */}
        <Route exact path="/feed" component={Feed}/>
      </Switch>
    </Router>
  )
}
