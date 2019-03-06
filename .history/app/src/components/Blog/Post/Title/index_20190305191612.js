import React from 'react'
import styled from 'styled-components'

import { lightBlue } from '../../../../constColors'

const Header = styled.header`
`

const ContainerTitle = styled.h2`
  padding: 10px 0;
  font-weight: bold;
  color: ${lightBlue};
  border-bottom: 1px solid ${lightBlue};
  display: inline-block;
  @media (max-width: 767px){
    font-size: 20px;
  }
`

const Title = ({ title }) => {
  return (
    <Header>
      <ContainerTitle>{title}</ContainerTitle>
    </Header>
  )
}

export default Title