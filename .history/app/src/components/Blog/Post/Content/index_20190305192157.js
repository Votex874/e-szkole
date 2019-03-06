import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.p`
  font-size: 18px;
  line-height: 28px;
  @media (max-width: 767px){
    line-height: 24px;
    font-size: 16px;
  }
`

const Content = ({ text }) => {
  return (
    <TextContainer>{text.slice(0, 198)}...</TextContainer>
  ) 
}

export default Content