import React from 'react'
import styled from 'styled-components'

import { lightBlue } from '../../../../constColors'

const Header = styled.header`
`

const ContainerTitle = styled.h2`
  margin: 10px 0;
  padding-bottom: 4px;
  font-weight: bold;
  color: ${lightBlue};
  border-bottom: 1px solid ${lightBlue};
  display: inline-block;
  @media (max-width: 767px){
    font-size: 20px;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    margin-top: 20px;
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