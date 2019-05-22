import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './reset.scss'

import { connect } from 'react-redux'
import { fetchPosts } from './reducers/actions/postsActions'
import Home from './containers/Home/index'
import Login from './containers/Login/index'
import Contact from './containers/Contact/index'
import News from './containers/News/index'
import About from './containers/About/index'
import Recruitment from './containers/Recruitment/index'
import Panel from './containers/Panel/index'

class App extends Component {
  componentDidMount = () => {
    this.props.fetchPosts();
  }
  render() {
    const userStatus = sessionStorage.getItem('user') || sessionStorage.getItem('admin')
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
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps, { fetchPosts })(App);
