import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import SingleLink from './Link/index'
import LoginButton from './../LoginButton/index';


const Nav = styled.nav`
  display: flex;
  margin: 10px 20px 0 auto;
  @media (max-width: 767px){  
    flex-direction: column;
    margin: 120px 0 0 0;
  }
`

class Navigation extends Component {

  render() {
    console.log(this.props)
    const { links } = this.props;
    let listOfLinks = [];
    let i = 0;
    for (const key of Object.keys(links)) {
      // console.log(key, links[key]);
      listOfLinks[i] = <SingleLink data={links[key]} key={key} />
      i++;
    }
    return (
      <React.Fragment>
        <Nav>
          {listOfLinks}
        </Nav>
        <LoginButton />  
      </React.Fragment>
    ); 
  }
}

const mapStateToProps = ({ links }) => {
  return {
    links
  }
}

export default connect(mapStateToProps)(Navigation);