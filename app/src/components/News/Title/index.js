import React from 'react';
import styled from 'styled-components'
import { lightBlue } from '../../../constColors'


const Alink = styled.a`
  text-decoration: none;
`
const TitleHeader = styled.h2`
  color: ${lightBlue};
  font-size: 26px;
  margin: 20px 0;
  display: inline-block;
  padding-bottom: 5px;
  border-bottom: 2px solid ${lightBlue};
  @media (max-width: 767px){
    font-size: 18px;
    margin: 10px 0;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    font-size: 22px;
    margin: 15px 0;
  }
`


const Title = ({ title }) => {
  return (
    <header>
      <Alink href="#">
        <TitleHeader>{title}</TitleHeader>
      </Alink>
    </header>
  )
}

export default Title;