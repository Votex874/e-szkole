import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'

class AboutTeam extends Component {

  render(){
    const { aboutTeam } = this.props
    console.log(aboutTeam)
    return (
      <div>
        {aboutTeam}
      
      </div>
    )
  }
}

const mapStateToProps = ({ aboutTeam }) => {
  return(
    aboutTeam
  )
}

export default connect(mapStateToProps)(AboutTeam)