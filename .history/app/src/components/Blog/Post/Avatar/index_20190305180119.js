import React from 'react'

const Avatar = ({ img }) => {
  return (
    <div src={require(`../../../images/news/${img}.png`)} >{img}</div>
  )
}

export default Avatar