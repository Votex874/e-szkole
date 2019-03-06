import React, { Component } from 'react'
import HeaderMain from '../../components/HeaderMain/index'
import Footer from '../../components/Footer/index'
import RecruitmentContent from '../../components/RecruitmentContent/index'

class Recruitment extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderMain />
        <RecruitmentContent />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Recruitment