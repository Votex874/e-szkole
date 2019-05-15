import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './reset.scss'

import Home from './containers/Home/index'
import Login from './containers/Login/index'
import Contact from './containers/Contact/index'
import News from './containers/News/index'
import About from './containers/About/index'
import Recruitment from './containers/Recruitment/index'
import Panel from './containers/Panel/index'
import PanelUsers from './containers/Panel/Users/index'

import { isAdminLogged } from './isLogged'

class App extends Component {
  render() {
    const userStatus = sessionStorage.getItem('user') || sessionStorage.getItem('admin')
    const adminStatus = isAdminLogged();
    console.log(adminStatus)
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/kontakt' component={Contact} />
          <Route path='/blog' component={News} />
          <Route path='/o-nas' component={About} />
          <Route path='/rekrutacja' component={Recruitment} />
          { userStatus !== null 
            ? <Route exact path='/panel' component={Panel} /> 
            : null 
          }
          { adminStatus !== null
            ? <Route exact path='/panel/uzytkownicy' component={PanelUsers} />
            : null            
          }  
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
