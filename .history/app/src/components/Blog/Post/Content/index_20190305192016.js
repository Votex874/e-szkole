import React from 'react'

const TextContainer = styled.p`
`

const Content = ({ text }) => {
  return (
    <TextContainer>{text.slice(0, 199)}</TextContainer>
  ) 
}

export default Content