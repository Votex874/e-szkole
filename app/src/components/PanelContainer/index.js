import React, { Component } from 'react'
import styled from 'styled-components'

import PanelItem from '../PanelOptions/PanelItem/index'
import SectionTitle from '../SectionTitle'
import TaskImg from '../../images/icons/tasks.png'
import { lightBlue } from '../../constColors';

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
  border: 4px solid ${lightBlue};
  border-radius: 5px;
  margin: 0 auto 50px auto;
  width: 1200px;
  @media(max-width: 767px){
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 1399px){
    width: 94%;
    margin: 0 auto;
  }
`

class PanelContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [
        {
          name: 'profil',
          path: '/panel'
        },
        {
          name: 'uzytkownicy',
          path: '/panel/uzytkownicy'
        },
        {
          name: 'blog',
          path: '/panel/blog'
        },
        {
          name: 'galeria',
          path: '/panel/galeria'
        },
      ]
    }
  }

  handleClick = (id) => {
    console.log(id, 'id')
  }

  render() {
    const adminStatus = sessionStorage.getItem('admin')
    return (
      <React.Fragment>
        <SectionTitle title="Panel Zarządzania" img={TaskImg} />
        <OptionsList>
          {this.state.list.map((e, i) => {
            if (adminStatus === null) {
              if (e.name === 'użytkownicy' || e === 'blog') {
                return
              } else {
                return <PanelItem id={i} handleClick={this.handleClick} key={i} content={e} />
              }
            } else {
              return <PanelItem id={i} handleClick={this.handleClick} key={i} content={e} />
            }
          })}
        </OptionsList>
        <ChoosenOption>
          {this.props.component}
        </ChoosenOption>
      </React.Fragment>
    )
  }
}

export default PanelContainer