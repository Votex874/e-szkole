import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.p`
  line-height: 20px;
  @media (max-width: 767px){
    
  }
`

const Content = ({ text }) => {
  return (
    <TextContainer>{text.slice(0, 198)}...</TextContainer>
  ) 
}

export default Content