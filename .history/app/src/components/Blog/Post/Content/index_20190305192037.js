import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.p`
`

const Content = ({ text }) => {
  return (
    <TextContainer>{text.slice(0, 199)...}</TextContainer>
  ) 
}

export default Content