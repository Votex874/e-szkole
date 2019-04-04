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
  padding-bottom: 10px;
  border-bottom: 2px dotted ${lightBlue};
  @media(max-width: 767px){
    font-size: 90%;
    text-align: center;
    border-bottom: none;
  }
  @media (min-width: 768px) and (max-width: 1399px){
    font-size: 100%;
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
  flex-direction: column;
  @media (min-width: 768px) and (max-width: 1399px){
    margin: 20px 0;
  }
`

const Icons = styled.div`
  cursor: pointer;
  @media (max-width: 767px){        
    width: 12px;
    height: 15px;
    display: flex;
    margin: 0 35px 0 auto;
  }
  @media (min-width: 768px) and (max-width: 1399px){        
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

const MoreInfo = styled.p`
	height: 0px;
  visibility: hidden;
  transition: .5s;
  width: 0px;
`

const ContainerUserInfo = styled.div`
  display: flex;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 767px){
    flex-direction: column;
  }
  @media (min-width: 768px) and (max-width: 1399px){

  }
`

const UserName = styled.span`
`

const SidebarMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
  flex-direction: column;
  @media (max-width: 767px){
    border-top: 2px dotted ${lightBlue};
    border-bottom: 2px dotted ${lightBlue};
    padding: 10px 0;
    flex-direction: row;
  }
  @media (min-width: 768px) and (max-width: 1399px){
    border-top: 2px solid ${lightBlue};
    border-bottom: 2px solid ${lightBlue};
    border-right: 2px solid ${lightBlue};
    padding: 20px 0;
  }
`

class Users extends Component{
  constructor(props){
    super(props)

    this.state = {
      sidebarItems: ['wszystkie dzieci', 'sześciolatki', 'pięciolatki', 'czterolatki', 'trzylatki'],
      users: ['tomek', 'patryk', 'kulep', 'akropol'],
      usersArray: []
    }
  }

  componentDidMount = () => {
    const { users } = this.state
    const usersList = users.map((e, i) => {
      return (
        <UserItem key={i}>
          <ContainerUserInfo>
            <Id>{i + 1}.</Id>
            <UserName>{e}</UserName>
            <Icons><Img src={Trash} /> <Img onClick={() => this.handleShowMoreInfo(i, e)} src={ArrowShow} /></Icons>
          </ContainerUserInfo>
          <MoreInfo>3213213</MoreInfo>
        </UserItem>
      )
    })
    this.setState({
      usersArray: usersList
    })
  }

  handleShowMoreInfo = (id, name) => {
    const { usersArray } = this.state
    const arrayHandler = [...usersArray];

    arrayHandler[id] = <UserItem key={id}>
      <ContainerUserInfo>
        <Id>{id + 1}.</Id>
        <UserName>{name}</UserName>
        <Icons><Img src={Trash} /> <Img onClick={() => this.handleHideMoreInfo(id, name)} src={ArrowHide} /></Icons>
      </ContainerUserInfo>
      <MoreInfo>3213213</MoreInfo>
    </UserItem>

    this.setState({
      usersArray: arrayHandler
    })

    const styleSlideUp = {
      height: 200,
      visibility: "visible", 
      width: 'auto'
    }

    setTimeout(() => {
      arrayHandler[id] = <UserItem key={id}>
        <ContainerUserInfo>
          <Id>{id + 1}.</Id>
          <UserName>{name}</UserName>
          <Icons><Img src={Trash} /> <Img onClick={() => this.handleHideMoreInfo(id, name)} src={ArrowHide} /></Icons>
        </ContainerUserInfo>
        <MoreInfo style={ styleSlideUp }>3213213</MoreInfo>
      </UserItem>
      this.setState({
        usersArray: arrayHandler
      })
    }, 100)
  }

  handleHideMoreInfo = (id, name) => {
    const { usersArray } = this.state
    const arrayHandler = [...usersArray];

    arrayHandler[id] = <UserItem key={id}>
      <ContainerUserInfo>
        <Id>{id + 1}.</Id>
        <UserName>{name}</UserName>
        <Icons><Img src={Trash} /> <Img onClick={() => this.handleShowMoreInfo(id, name)} src={ArrowShow} /></Icons>
      </ContainerUserInfo>
      <MoreInfo>3213213</MoreInfo>
    </UserItem>

    this.setState({
      usersArray: arrayHandler
    })
  }

  render(){
    const { sidebarItems, usersArray } = this.state
    return (
      <React.Fragment>
        <Title>Zarządzaj członkami przedszkola</Title>
        <MainContainer>
          <SidebarMenu>
            {sidebarItems.map((e, i) => {
              return <SidebarMenuItem key={i} content={e} />
            })}
          </SidebarMenu>
          <UsersList>
            {usersArray}
          </UsersList>
        </MainContainer>
      </React.Fragment>
    )
  }
}

export default Users