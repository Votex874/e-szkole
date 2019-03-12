import React, { Component } from 'react'
import styled from 'styled-components'
import { lightBlue } from '../../../constColors';

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 120%;
  margin: 10px 0 10px 0;
  @media(max-width: 767px){
    font-size: 90%;
    text-align: center;
  }
`

const SidebarMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 767px){
    border-top: 2px dotted ${lightBlue};
    padding-top: 10px;
  }
`

const SidebarMenuItem = styled.p`

`

class Users extends Component{
  constructor(props){
    super(props)

    this.state = {
      sidebarItems: ['wszystkie dzieci', 'sześciolatki', 'pięciolatki', 'czterolatki', 'trzylatki']
    }
  }
  render(){
    const { sidebarItems } = this.state
    return (
      <React.Fragment>
        <Title>Zarządzaj członkami przedszkola</Title>
        <SidebarMenu>
          {sidebarItems.map((e, i) => {
            return <SidebarMenuItem key={i}>{e}</SidebarMenuItem>
          })}
        </SidebarMenu>
      </React.Fragment>
    )
  }
}

export default Users