import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
`

const ContainerTitle = styled.h2`
  padding-left: 5px;
  font-weight: bold;
`

const Title = ({ title }) => {
  return (
    <Header>
      <ContainerTitle>{title}</ContainerTitle>
    </Header>
  )
}

export default Title