import React from 'react'
import { useSelector } from 'react-redux';
import Dijango from '../../assets/dijango.png';
import Friends from './Friends';
// import 
import './index.css';
function LeftCommunitybar() {

  const friendsList = useSelector(state => state.addRemoveFriends)

  // const friendsList = [
  //   {
  //     id: 8,
  //     name: "Tom",
  //     profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfLCs5lVr1Ev5xUChMTIDKUSn5C8Wa223HA&usqp=CAU",
  //   },
  //   {
  //     id: 9,
  //     name: "jass",
  //     profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRddwWLweaFxOmeLoT4hixHZLU_PzXHEXJQvA&usqp=CAU",
  //   },
  // ]

  return (
    <div className='left-Com-sidebar'>
      <div className="recent-topics-container">
        <div className="topics-head">
          <h3>Recent Topics</h3>
        </div>
        <div className="recent-topics">
          <div className="topic">
            <img src={Dijango} alt="" />
            <div className="topic-right">
              <h4>#Dijango gang</h4>
              <p>BY ADMIN</p>
            </div>
          </div>
          <div className="topic">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfLCs5lVr1Ev5xUChMTIDKUSn5C8Wa223HA&usqp=CAU" alt="" />
            <div className="topic-right">
              <h4>Tess </h4>
              <p>tess-cirss</p>
            </div>
          </div>
          <div className="topic">
            <img src="https://www.shutterstock.com/image-vector/dsa-letter-original-monogram-logo-600w-1757657366.jpg" alt="" />
            <div className="topic-right">
              <h4>DSA Q&A</h4>
              <p>BY ADMIN</p>
            </div>
          </div>
          <div className="topic">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHdqMHlM-9YoVRL5CkDPXLdPC2VK3K9OMKg&usqp=CAU" alt="" />
            <div className="topic-right">
              <h4>Lagos</h4>
              <p>lagos-martin</p>
            </div>
          </div>
        </div>
      </div>


      {/* friends */}
      <div className="friends-container">
        <div className="friends-top">
          <h3>Friends</h3>
        </div>
        <div className="friends-bottom">
          <div className="frinds-filter">
            <p>Newest</p>
            <p>Active</p>
            <p>Popular</p>
          </div>
          <div className="friends-box">

            {
              friendsList.data.map((item) => (
                <Friends data={item} />
              ))
            }
            {/* <div className="frinds">
              <div className='frinds-profile'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbRtfnYvr7cVmZGjfyuSpE7mSY9ftEZzLYg&usqp=CAU" alt="" />
                <p>Tom</p>
              </div>
              <div className="remove-friends">
                <img src={Removefrnd} alt="" />
              </div>
            </div>
            <div className="frinds">
              <div className='frinds-profile'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRddwWLweaFxOmeLoT4hixHZLU_PzXHEXJQvA&usqp=CAU" alt="" />
                <p>Jazz</p>
              </div>
              <div className="remove-friends">
                <img src={Removefrnd} alt="" />
              </div>
            </div> */}
          </div>
          <div className="veiw-all-friends">
            <p>VEIW ALL</p>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftCommunitybar
