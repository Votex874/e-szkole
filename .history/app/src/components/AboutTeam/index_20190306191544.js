import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import SectionTitle from '../SectionTitle/index'
import TeamIcon from '../../images/icons/users.png'


const Container = styled.section`
  margin: 0 auto;
  
  @media (max-width: 767px){
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 768px){
    width: 800px;
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
        <SectionTitle img={TeamIcon} title="Nasz Zespół" />
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