import React from 'react'
const Avatar = ({ img }) => {
  return (
    <img src={require(`../../../../images/news/${img}.png`)} />
  )
}

export default Avatar