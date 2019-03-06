import React, { Component } from 'react'
import styled from 'styled-components'
import FooterNav from './FooterNav/index'
import { lightBlue } from '../../constColors'

const FooterContainer = styled.footer`
  width: 600px;
  margin: 0 auto;
  @media (max-width: 767px){
    width: 100%;
  }
`

const FooterBanner = styled.div`
  background-color: ${lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 15px auto;
  height: 35px;
  border-radius: 10px;
  @media (max-width: 767px){
    width: 100%;
    border-radius: 0;
  }
`

class Footer extends Component {
  render(){
    return (
      <FooterContainer>
        <FooterNav />
        <FooterBanner>All rights reserved &copy; </FooterBanner>
      </FooterContainer>
    )
  }
}


export default Footer