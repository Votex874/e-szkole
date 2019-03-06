import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './reset.scss'

import Home from './containers/Home/index'
import Login from './containers/Login/index'
import Contact from './containers/Contact/index'
import News from './containers/News/index'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/kontakt' component={Contact} />
          <Route path='/blog' component={News} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
