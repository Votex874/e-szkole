import React, { Component } from 'react'
import styled from 'styled-components'
import { lightBlue } from '../../../constColors';

import SidebarMenuItem from '../Item/index'
import ArrowHide from '../../../images/icons/arrow-hide.png'
import ArrowShow from '../../../images/icons/arrow-show.png'
import Trash from '../../../images/icons/trash.png'

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
  border-bottom: 1px solid ${lightBlue};
  padding-bottom: 4px;
  margin: 10px 0;
  display: flex;
`

const Icons = styled.div`
  cursor: pointer;
  @media (max-width: 767px){        
    width: 12px;
    height: 15px;
    display: flex;
    margin: 0 35px 0 auto;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 5px;
`

const Id = styled.p`
  border-right: 1px solid ${lightBlue};
  padding: 0 5px;
  margin-right: 5px;
`

const UserName = styled.span`
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
      users: ['tomek', 'patryk', 'kulep', 'akropol'],
      usersArray: [],
      currentArrowImg: ArrowShow,
    }
  }

  componentDidMount = () => {
    const { users, currentArrowImg } = this.state
    const usersList = users.map((e, i) => {
      return (
        <UserItem key={i}>
          <Id>{i + 1}.</Id>
          <UserName>{e}</UserName>
          <Icons><Img src={Trash} /> <Img onClick={(e) => this.handleShowMoreInfo(e)} src={currentArrowImg} /></Icons>
        </UserItem>
      )
    })
    this.setState({
      usersArray: usersList
    })
  }

  handleShowMoreInfo = (id) => {
    console.log('click')
    console.log(id)
    const { currentArrowImg } = this.state
    if(currentArrowImg === ArrowShow){
      this.setState({ currentArrowImg: ArrowHide })
    } else {
      this.setState({ currentArrowImg: ArrowShow })
    }
  }

  render(){
    const { sidebarItems, usersArray, users, currentArrowImg } = this.state
    return (
      <React.Fragment>
        <Title>Zarządzaj członkami przedszkola</Title>
        <SidebarMenu>
          {sidebarItems.map((e, i) => {
            return <SidebarMenuItem key={i} content={e} />
          })}
        </SidebarMenu>
        <UsersList>
          {usersArray}
        </UsersList>
      </React.Fragment>
    )
  }
}

export default Users