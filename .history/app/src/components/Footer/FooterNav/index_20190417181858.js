import React, { Component } from 'react'
import styled from 'styled-components'
import NavLink from './NavLink/index'
import { connect } from 'react-redux'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 50%;
  @media (max-width: 767px){
    width: 90%;
    margin: 0 auto;
  }
`

class FooterNav extends Component {
  constructor(props){
    super(props)

    this.state = {
      nav: []
    }
  }
  componentDidMount = () => {
    const { links } = this.props
    let listOfNavs = [];
    let i = 0;
    for (const key of Object.keys(links)) {
      if(links[key].basic === 'true'){
        listOfNavs[i] =
          <NavLink name={links[key].name} url={links[key].url} key={key} />
        i++;
      }
    }
    this.setState({
      nav: listOfNavs
    }) 
  }

  render(){
    const { nav } = this.state;
    return(
      <NavContainer>
        {nav}
      </NavContainer>
    )
  }
}

const mapStateToProps = ({ initialState }) => {
  return {
    links: initialState.links
  }
}

export default connect(mapStateToProps)(FooterNav);