import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import SectionTitle from '../SectionTitle/index'
import TeamIcon from '../../images/icons/users.png'


const Container = styled.section`
  margin: 70px auto 100px auto;
`

const Content = styled.p`
  margin: 0 auto;
  width: 700px;
  font-size: 18px;
  line-height: 30px;
  @media (max-width: 767px){
    width: 90%;      
    font-size: 14px;
    line-height: 24px;
  }
  @media (min-width: 768px) and (max-width: 768px){
    width: 600px;    
    font-size: 16px;
    line-height: 26px;
  }
`

class AboutTeam extends Component {
  render(){
    const { aboutTeam } = this.props
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