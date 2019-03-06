import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'

const Container = styled.section`
  margin: 0 auto;
  @media (max-width: 767px){
    width: 90%;
  }
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