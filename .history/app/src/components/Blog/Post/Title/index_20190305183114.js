import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
`

const ContainerTitle = styled.h2`
  width: auto;
  margin: 0 auto;
`

const Title = ({ title }) => {
  return (
    <Header>
      <ContainerTitle>{title}</ContainerTitle>
    </Header>
  )
}

export default Title