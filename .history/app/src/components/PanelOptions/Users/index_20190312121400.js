import React, { Component } from 'react'
import styled from 'styled-components'
import { lightBlue } from '../../../constColors';

import SidebarMenuItem from '../Item/index'

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 120%;
  margin: 10px 0 10px 0;
  @media(max-width: 767px){
    font-size: 90%;
    text-align: center;
  }
`

const UsersList = styled.ul`

`

const UserItem = styled.li`

`

const DeleteUser = styled.div`

`

const ShowMore = styled.div`

`

const HideMore = styled.div`

`

const SidebarMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
  @media (max-width: 767px){
    border-top: 2px dotted ${lightBlue};
    border-bottom: 2px dotted ${lightBlue};
    padding: 10px 0;
  }
`

class Users extends Component{
  constructor(props){
    super(props)

    this.state = {
      sidebarItems: ['wszystkie dzieci', 'sześciolatki', 'pięciolatki', 'czterolatki', 'trzylatki'],
      users: ['tomek', 'patryk', 'kulep', 'akropol']
    }
  }
  render(){
    const { sidebarItems, users } = this.state
    return (
      <React.Fragment>
        <Title>Zarządzaj członkami przedszkola</Title>
        <SidebarMenu>
          {sidebarItems.map((e, i) => {
            return <SidebarMenuItem key={i} content={e} />
          })}
        </SidebarMenu>
        <UsersList>
          {users.map((e, i) => {
            return (
              <UserItem key={i}>
                {e}
              </UserItem>
            )
          })}
        </UsersList>
      </React.Fragment>
    )
  }
}

export default Users