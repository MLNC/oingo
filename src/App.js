import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./login.js";
import Registration from "./registration.js";
import Error from "./error.js";
import Main from "./main.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/login" component={Login}/>
          <Route path="/registration" component={Registration} />
          <Route path="/main" component={Main} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
