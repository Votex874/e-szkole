import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
`

const ContainerTitle = styled.h2`
  padding: 10px 0;
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