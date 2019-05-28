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
    const { data } = this.props
    return (
      <React.Fragment>
        <ContainerHandler>
          <TextHolder>Rodzaj konta: </TextHolder>
          <AnswearHolder>{data.role}</AnswearHolder>
        </ContainerHandler>
        <ContainerHandler>
          <TextHolder>Wiek: </TextHolder>
          <AnswearHolder>brak informacji</AnswearHolder>
        </ContainerHandler>
        <ContainerHandler>
          <TextHolder>Data założenia: </TextHolder>
          <AnswearHolder>{data.date.slice(0, 10).replace(/-/g, '/')}</AnswearHolder>
        </ContainerHandler>        
      </React.Fragment>
    )
  }
}

export default MoreInformation