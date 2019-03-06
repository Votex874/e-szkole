import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'

const Container = styled.section`

`

const Content = styled.p`

`

class AboutTeam extends Component {
  render(){
    const { aboutTeam } = this.props
    console.log(aboutTeam)
    return (
      <Container>
        <Content>
          {aboutTeam}
        </Content>      
      </Container>
    )
  }
}

const mapStateToProps = ({ aboutTeam }) => {
  return {
    aboutTeam
  }
}

export default connect(mapStateToProps)(AboutTeam)