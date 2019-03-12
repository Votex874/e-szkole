import React, { Component } from 'react'
import styled from 'styled-components'

import PanelItem from './PanelItem/index'
import SectionTitle from '../SectionTitle'
import TaskImg from '../../images/icons/tasks.png'

const OptionsList = styled.ul`
  display: flex;
  @media (max-width: 767px){
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

class PanelOptions extends Component{
  constructor(props){
    super(props)

    this.state = {
      list: ['użytkownicy', 'blog', 'przykład']
    }
  }

  handleClick = (id) => {
    console.log(id, 'id')
  }

  render(){
    return (
      <OptionsList>
        <SectionTitle title="Panel Zarządzania" img={TaskImg} />
        {this.state.list.map((e,i) => {
          return <PanelItem id={i} handleClick={this.handleClick} key={i} content={e} />
        })}
      </OptionsList>
    )
  }
}

export default PanelOptions