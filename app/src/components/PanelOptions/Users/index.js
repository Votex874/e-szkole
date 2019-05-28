import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { lightBlue } from '../../../constColors';
import { fetchUsers, deleteUser } from '../../../reducers/actions/usersActions'
import Title from '../TitlePanel/index'
import MoreInformation from './MoreInfo/index'
import ArrowHide from '../../../images/icons/arrow-hide.png'
import ArrowShow from '../../../images/icons/arrow-show.png'
import Trash from '../../../images/icons/trash.png'

const UsersList = styled.ul`
  padding-left: 10px;
  margin: 10px auto;
  width: 80%;
  @media (max-width: 767px){
    padding: 0;
    margin: 0;
    width: auto;
  }
`

const UserItem = styled.li`
  border-bottom: 1px solid ${lightBlue};
  padding-bottom: 4px;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  color: #5E5E5E;
  font-size: 18px;
  @media (min-width: 768px) and (max-width: 1399px){
    margin: 25px 0;
  }
  &:first-of-type{
    margin-top: 0;
  }
  &:last-of-type{
    margin-bottom: 20px;
  }
  @media (max-width: 767px){
    font-size: 12px;
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

const MoreInfo = styled.div`
	height: 0px;
  visibility: hidden;
  transition: .5s;
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

class Users extends Component{
  constructor(props){
    super(props)

    this.state = {
      usersData: [],
      list: []
    }
  }

  componentWillMount = () => {
    this.props.fetchUsers();
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.posts !== prevProps.posts)
      this.createArrayWithUsers();

    if (this.state.list.length === 0)
      this.createArrayWithUsers();
  }

  createArrayWithUsers = () => {
    let usersData = this.state.usersData.length === 0 ? [] : this.state.usersData
    if (usersData.length === 0) {
      usersData = [...this.props.users].map(() => {
        return { isContentVisible: false }
      })
    }

    const showContent = { height: 'auto', opacity: '1', visibility: 'visible' }
    const hideContent = { height: '0', opacity: '0', visibility: 'hidden' }

    const users = [...this.props.users].map((user, i) => {
      const currentItem = usersData[i].isContentVisible;
      return (
        <UserItem key={i}>
          <ContainerUserInfo>
            <Id>{i + 1}.</Id>
            <UserName>{user.email}</UserName>
            <Icons>
              <Img src={Trash} onClick={() => this.handleDeleteUser(user._id)} />
              <Img onClick={() => this.handleToggleContent(i)} src={currentItem ? ArrowHide : ArrowShow} /></Icons>
          </ContainerUserInfo>
          <MoreInfo style={currentItem ? showContent : hideContent}>
            <MoreInformation data={user} />
          </MoreInfo>
        </UserItem>
      )
    })
    this.setState({
      list: users,
      usersData
    })
  }

  handleToggleContent = id => {
    const { usersData } = this.state
    let arrayData = [...usersData]
    arrayData[id].isContentVisible = !arrayData[id].isContentVisible

    this.setState({
      postsData: arrayData
    })
    this.createArrayWithUsers();
  }

  handleDeleteUser = id => {
    this.props.deleteUser(id)
  }

  render(){
    const { list } = this.state
    return (
      <React.Fragment>
        <Title text='Zarządzaj członkami przedszkola' />
        <MainContainer>
          <UsersList>
            {list.length > 0 
              ? list
              : <p>Trwa wczytywanie użytkowników... </p> //TODO: Dodać jakiegoś kręcioła jako osobny komponent
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

export default connect(mapStateToProps, { fetchUsers, deleteUser })(Users)