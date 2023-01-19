import React from 'react';
import Like from '../../assets/like.png';
import Likes from '../../assets/likes.png';
import Comment from '../../assets/message.png';
import Share from '../../assets/share.png';
import Follow from '../../assets/add-friend.png';
import { useState } from 'react';

const Post = ({ post }) => {
    let [like, setLike] = useState()
    console.log(post.likes)
    const handleLike = () => {
        setLike = post.likes + 1;
        console.log(like)
    }
    return (
        <div className='post-card'>
            {/*  */}
            <div className="post-details">
                <div className="person">
                    <div className="person-details">
                        <img src={post.profilePic} alt="" />
                        <div className="name-date">
                            <h4>{post.name}</h4>
                            <p>{post.date}</p>
                        </div>
                    </div>
                    <div className="add-friend">
                        <img src={Follow} alt="+" />
                        <p>Follow</p>
                    </div>
                </div>
                <div className="posted-text">
                    <p>{post.postText}</p>
                </div>
            </div>
            <div className="post-item">
                <img src={post.image} alt="" />
                <div className="like-display">
                    <img src={Likes} alt="" />
                    <p>{like}</p>
                </div>
            </div>

            <div className="response">
                <div className="reactions">
                    <div className="like">
                        <img src={Like} alt="" />
                        <p onClick={handleLike}>Like</p>
                    </div>
                    <div className="comment">
                        <img src={Comment} alt="" />
                        <p>Comment</p>
                    </div>
                    <div className="share">
                        <img src={Share} alt="" />
                        <p>Share</p>
                    </div>
                </div>
                <div className="comments">
                    <div className="new-comment">
                        <img src="" alt="" />
                        <div className="comment-input">
                            <input type="text" />
                            <img src="" alt="" />
                        </div>
                        <div className="all-comments">
                            <div className="comment-box">
                                <img src="" alt="" />
                                <div className="coment-details">
                                    <h4>{post.name}</h4>
                                    <p>{post.date}</p>
                                </div>
                                <div className="comment-text">
                                    <p>{post.comment}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
