import React, { Component } from 'react';
import HeaderMain from '../../components/HeaderMain/index'
import News from '../../components/News/index'
import AboutUs from '../../components/AboutUs/index'
import Graduates from '../../components/Graduates/index'
import Footer from '../../components/Footer/index'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderMain />
        <News />
        <AboutUs />
        <Graduates />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;