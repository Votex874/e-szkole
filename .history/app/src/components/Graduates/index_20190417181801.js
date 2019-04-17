import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import SectionTitle from '../SectionTitle/index'
import IconTitle from '../../images/icons/graduation.png'
import ListItem from './ListItem/index'
import initialState from './../../reducers/initialState';

const SectionAbout = styled.section`
  width: 60%;
  margin: 50px auto;
  @media (max-width: 767px){
    width: 94%;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    width: 65%;
  }
`

class Graduates extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
      title: 'nasz absolwent'
    }
  }

  render() {
    const { title } = this.state
    const { list } = this.props
    return (
      <SectionAbout>
        <SectionTitle title={title} img={IconTitle} />
        {list.map( (e,i) => {
          return <ListItem content={e} key={i} />
        })}
      </SectionAbout>
    )
  }
}

const mapStateToProps = ({ initialState }) => {
  return {
    list: initialState.list
  }
}

export default connect(mapStateToProps)(Graduates);