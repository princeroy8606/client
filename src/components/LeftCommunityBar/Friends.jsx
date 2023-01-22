import React from 'react'
import Removefrnd from '../../assets/remove-friend.png'

function Friends({ data }) {
  return (
    <div className="frinds">
      <div className='frinds-profile'>
        <img src={data.profile} alt="" />
        <p>{data.name}</p>
      </div>
      <div className="remove-friends">
        <img src={Removefrnd} alt="" />
      </div>
    </div>
  )
}

export default Friends
