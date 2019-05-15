import React, { Component } from 'react'
import styled from 'styled-components'

import { fetchUsers } from '../../../reducers/actions/usersActions'
import { connect } from 'react-redux'
import { isLogged } from '../../../isLogged'

class Profile extends Component{
  componentDidMount = () => {
    this.props.fetchUsers()
  }



  render(){
    const user = isLogged();
    
    return (
      <div>
        {this.props.users === undefined 
          ? 'Imie'
          : 'dada'
        }
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: users.users
  }
}

export default connect(mapStateToProps, { fetchUsers })(Profile)