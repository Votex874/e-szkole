import React from 'react'
import styled from 'styled-components'
import { lightBlue } from '../../constColors'

const HeaderTitle = styled.h2`
  color: ${lightBlue};
  font-size: 32px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  @media (max-width: 767px){
    font-size: 22px;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    font-size: 28px;
  }
`
const HeaderImg = styled.img`
  width: 40px;
  height: 30px;
  margin-left: 10px;
  @media(max-width: 767px){
    width: 30px;
    height: 20px;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    width: 36px;
    height: 26px;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 25px auto;
`

const SectionTitle = ({ title, img }) => {
  return (
    <Header>
      <HeaderTitle>{title}</HeaderTitle> 
      <HeaderImg src={img} alt="ikona zespolu"/>
    </Header>
  )
}


export default SectionTitle;