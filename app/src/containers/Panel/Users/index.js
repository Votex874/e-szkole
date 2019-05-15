import React, { Component } from 'react'

import HeaderMain from '../../../components/HeaderMain/index'
import Footer from '../../../components/Footer/index'
import PanelContainer from '../../../components/PanelContainer/index'
import Users from '../../../components/PanelOptions/Users/index'

class PanelUsers extends Component {
  render() {
    const component = <Users />
    return (
      <React.Fragment>
        <HeaderMain />
        <PanelContainer component={component} />
        <Footer />
      </React.Fragment>
    )
  }
}

export default PanelUsers