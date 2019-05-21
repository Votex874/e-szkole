import React, { Component } from 'react'
import styled from 'styled-components'

import { lightBlue } from '../../../../constColors'

const ContainerHandler = styled.div`
  margin: 10px 0 10px 8px;
`
const TextHolder = styled.span`
`
const AnswearHolder = styled.span`
  color: ${lightBlue};
`

class MoreInformation extends Component{
  render(){
    return (
      <React.Fragment>
        <ContainerHandler>
          <TextHolder>Rodzaj konta: </TextHolder>
          <AnswearHolder> none</AnswearHolder>
        </ContainerHandler>
        <ContainerHandler>
          <TextHolder>Wiek: </TextHolder>
          <AnswearHolder>undefined</AnswearHolder>
        </ContainerHandler>
        <ContainerHandler>
          <TextHolder>Data założenia: </TextHolder>
          <AnswearHolder> 23.06.1997</AnswearHolder>
        </ContainerHandler>        
      </React.Fragment>
    )
  }
}

export default MoreInformation