import React from 'react'
import Removefrnd from '../../assets/remove-friend.png';
import { removeFriend } from '../../actions/friends';
import { useDispatch } from 'react-redux';

function Friends({ data }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeFriend({ id: data.id }))
  }

  return (
    <div className="frinds">
      <div className='frinds-profile'>
        <img src={data.profile} alt="" />
        <p>{data.name}</p>
      </div>
      <div className="remove-friends" onClick={handleClick}>
        <img src={Removefrnd} alt="" />
      </div>
    </div>
  )
}

export default Friends
