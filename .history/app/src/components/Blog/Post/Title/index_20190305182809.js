import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
`

const Title = styled.h2`
`

const Title = ({ title }) => {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  )
}

export default Title