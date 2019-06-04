import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.p`
  font-size: 20px;
  line-height: 30px;
  word-wrap: break-word;
  @media (max-width: 767px){
    line-height: 24px;
    font-size: 16px;
    max-width: 250px;
  }
  @media (min-width: 768px) and (max-width: 1399px){
    font-size: 16px;
    line-height: 28px;
    max-width: 250px;
  }
`

const Content = ({ text }) => {
  return (
    <TextContainer>{text.slice(0, 198)}...</TextContainer>
  ) 
}

export default Content