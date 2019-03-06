import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
`

const ContainerTitle = styled.h2`
  text-align: center;
`

const Title = ({ title }) => {
  return (
    <Header>
      <ContainerTitle>{title}</ContainerTitle>
    </Header>
  )
}

export default Title