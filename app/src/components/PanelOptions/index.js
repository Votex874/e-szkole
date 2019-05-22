import React, { Component } from 'react'
import styled from 'styled-components'

import PanelItem from './PanelItem/index'
import SectionTitle from '../SectionTitle'
import TaskImg from '../../images/icons/tasks.png'
import { lightBlue } from '../../constColors';
import Profile from './Profile/index'
import Users from './Users/index'
import Blog from './Blog/index'

const OptionsList = styled.ul`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 767px){
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    width: 80%;
  }
`

const ChoosenOption = styled.div`
  border: 4px solid ${lightBlue};
  border-radius: 5px;
  margin: 0 auto 50px auto;
  width: 1000px;
  @media(max-width: 767px){
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 1399px){
    width: 94%;
    margin: 0 auto;
  }
`

class PanelOptions extends Component{
  constructor(props){
    super(props)

    this.state = {
      currentView: <Blog />,
      list: [
        { 
          name: 'profil',
          component: <Profile />,
          path: '/panel',
          mainView: false,
          id: 0,
        },
        { 
          name: 'użytkownicy',
          component: <Users />,
          path: '/panel/uzytkownicy',
          mainView: false,
          id: 1,
        },
        {
          name: 'blog',
          component: <Blog />,
          path: '/panel/blog',
          mainView: true,
          id: 2,
        },
        { 
          name: 'galeria',
          component: <div>2</div>,
          path: '/panel/galeria',
          mainView: false,
          id: 3
        },
      ]
    }
  }

  handleClick = (id) => {
    const { list } = this.state
    const activeItem = list.find(e => e.mainView === true)
    let newArray = [...list]
    newArray[activeItem.id].mainView = false
    newArray[id].mainView = true
    this.setState({
      list: newArray,
      currentView: list[id].component
    }) 
  }

  render(){
    const adminStatus = sessionStorage.getItem('admin')
    const { currentView } = this.state
    return (
      <React.Fragment>
        <SectionTitle title="Panel Zarządzania" img={TaskImg} />
        <OptionsList>
          {this.state.list.map((e,i) => {
            if(adminStatus === null){
              if(e.name === 'użytkownicy' || e.name === 'blog'){
                return 
              } else {
                return <PanelItem id={i} handleClick={this.handleClick}  key={i} content={e} />
              }
            } else {
              return <PanelItem id={i} handleClick={this.handleClick} key={i} content={e} />
            }
          })}
        </OptionsList>
        <ChoosenOption>
          {currentView}
        </ChoosenOption>
      </React.Fragment>
    )
  }
}

export default PanelOptions