import React, { Component } from 'react'
import styled from 'styled-components'

import PanelItem from './PanelItem/index'

const OptionsList = styled.ul`
  display: flex;
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
        {this.state.list.map((e,i) => {
          return <PanelItem handleClick={this.handleClick} key={i} content={e} />
        })}
      </OptionsList>
    )
  }
}

export default PanelOptions