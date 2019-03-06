import React, { Component } from 'react'
import HeaderMain from '../../components/HeaderMain/index'
import Footer from '../../components/Footer/index'
import AboutTeam from '../../components/AboutTeam/index'

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderMain />
        <AboutTeam />
        <Footer />
      </React.Fragment>
    )
  }
}

export default About