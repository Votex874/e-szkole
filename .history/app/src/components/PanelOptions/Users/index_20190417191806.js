import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { lightBlue } from '../../../constColors';
import { fetchUsers } from '../../../reducers/actions/usersActions'

import SidebarMenuItem from '../Item/index'
import ArrowHide from '../../../images/icons/arrow-hide.png'
import ArrowShow from '../../../images/icons/arrow-show.png'
import Trash from '../../../images/icons/trash.png'

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 120%;
  margin: 20px auto 0 auto;
  padding-bottom: 20px;
  border-bottom: 2px dotted ${lightBlue};
  text-align: center;
  width: 98%;
  @media(max-width: 767px){
    font-size: 90%;
    border-bottom: none;
    margin: 10px 0 0 0;
    padding-bottom: 10px;
  }
  @media (min-width: 768px) and (max-width: 1399px){
    font-size: 100%;
    margin: 10px 0 0 0;
    padding-bottom: 10px;
  }
`

const UsersList = styled.ul`
  padding-left: 10px;
  border-left: 2px solid ${lightBlue};
  margin: 10px auto;
  width: 80%;
  @media (max-width: 767px){
    padding: 0;
    margin: 0;
    width: auto;
    border-left: 0;
  }
`

const UserItem = styled.li`
  border-bottom: 1px solid ${lightBlue};
  padding-bottom: 4px;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) and (max-width: 1399px){
    margin: 25px 0;
  }
  &:first-of-type{
    margin-top: 0;
  }
  &:last-of-type{
    margin-bottom: 0;
  }
`

const Icons = styled.div`
  cursor: pointer;
  width: 20px;
  height: 25px;
  display: flex;
  margin: 0 45px 0 auto;
  @media (max-width: 767px){        
    width: 12px;
    height: 15px;
    display: flex;
    margin: 0 35px 0 auto;
  }
  @media (min-width: 768px) and (max-width: 1399px){        
    width: 20px;
    height: 25px;
    display: flex;
    margin: 0 40px 0 auto;
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
  display: flex;
  align-items: flex-end;
  font-size: 125%;
  @media (max-width: 767px){
    display: inline;
  }
  @media (min-width: 768px) and (max-width: 1399px){
    font-size: 115%;
  }
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
`

const UserName = styled.span`
  display: flex;
  align-items: flex-end;
  font-size: 125%;
  @media (max-width: 767px){
    display: inline;
  }
  @media (min-width: 767px) and (max-width: 1399px){
    font-size: 115%;
  }
`

const SidebarMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 10px 0;
  max-height: 200px;
  width: 200px;
  @media (max-width: 767px){
    border-top: 2px dotted ${lightBlue};
    border-bottom: 2px dotted ${lightBlue};
    padding: 10px 0;
    flex-direction: row;
    width: auto;
  }
`

class Users extends Component{
  constructor(props){
    super(props)

    this.state = {
      sidebarItems: ['wszystkie dzieci', 'sześciolatki', 'pięciolatki', 'czterolatki', 'trzylatki'],
      users: ['Tomek', 'patryk', 'kulep', 'akropol', 'tomek', 'patryk', 'kulep', 'akropol'],
      usersArray: []
    }
  }

  componentWillMount = () => {
    this.props.fetchUsers();
  }

  // componentDidMount = () => {
  //   const { users } = this.state
  //   const usersList = users.map((e, i) => {
  //     return (
  //       <UserItem key={i}>
  //         <ContainerUserInfo>
  //           <Id>{i + 1}.</Id>
  //           <UserName>{e}</UserName>
  //           <Icons><Img src={Trash} /> <Img onClick={() => this.handleShowMoreInfo(i, e)} src={ArrowShow} /></Icons>
  //         </ContainerUserInfo>
  //         <MoreInfo>3213213</MoreInfo>
  //       </UserItem>
  //     )
  //   })
  //   this.setState({
  //     usersArray: usersList
  //   })
  // }

  // componentDidUpdate = (prevProps) => {
  //   if(this.props.users !== prevProps.users){
  //     this.setState({
  //       users: this.props.users
  //     })
  //   }
  // }

  handleShowMoreInfo = (id, name) => {
    const { usersArray } = this.state
    console.log(this.props.users)
    console.log([...this.props.users][id])
    const arrayHandler = [...this.props.users];

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
    const { users } = this.props
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
            {usersArray.length > 0 
            ? usersArray 
            : users.length > 0
                ? users.map((e, i) =>
                  <UserItem key={i}>
                    <ContainerUserInfo>
                      <Id>{i + 1}.</Id>
                      <UserName>{e.name}</UserName>
                      <Icons><Img src={Trash} /> <Img onClick={() => this.handleShowMoreInfo(i, e.name)} src={ArrowShow} /></Icons>
                    </ContainerUserInfo>
                    <MoreInfo>3213213</MoreInfo>
                  </UserItem>)
                : <div>2</div>
           }            
          </UsersList>
        </MainContainer>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: users.users
  }
}

export default connect(mapStateToProps, { fetchUsers })(Users)