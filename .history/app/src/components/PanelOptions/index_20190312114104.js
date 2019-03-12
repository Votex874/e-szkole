import React, { Component } from 'react'
import styled from 'styled-components'

import PanelItem from './PanelItem/index'
import SectionTitle from '../SectionTitle'
import TaskImg from '../../images/icons/tasks.png'
import Users from './Users/index'

const OptionsList = styled.ul`
  width: 1200px;
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
      <React.Fragment>
        <SectionTitle title="Panel Zarządzania" img={TaskImg} />
        <OptionsList>
          {this.state.list.map((e,i) => {
            return <PanelItem id={i} handleClick={this.handleClick} key={i} content={e} />
          })}
        </OptionsList>
        <ChoosenOption>
          <Users />
        </ChoosenOption>
      </React.Fragment>
    )
  }
}

export default PanelOptions