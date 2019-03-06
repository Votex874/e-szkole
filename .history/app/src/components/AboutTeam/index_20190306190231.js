import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'

class AboutTeam extends Component {

  render(){
    return (
      1
    )
  }
}

const mapStateToProps = ({ aboutTeam }) => {
  return(
    aboutTeam
  )
}

export default connect(mapStateToProps)(AboutTeam)