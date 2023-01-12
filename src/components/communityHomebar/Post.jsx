import React from 'react'

const Post = ({ post }) => {
    return (
        <div className='post-card'>
            {/*  */}
            <div className="post-details">
                <div className="person">
                    <div className="image-container">
                        <img src={post.profilePic} alt="" />
                    </div>
                    <div className="name-date">
                        <h4>{post.name}</h4>
                        <p>{post.date}</p>
                    </div>
                    <div className="add-friend">
                        <img src="" alt="add" />
                    </div>
                </div>
                <div className="post-text">
                    <p>{post.postText}</p>
                </div>
            </div>
            <div className="post-item">
                <img src={post.image} alt="" />
            </div>
            {/*  */}
            <div className="like-display">
                <p>{post.likes}</p>
            </div>
            {/*  */}
            <div className="response">
                <div className="reactions">
                    <div className="like">
                        <img src="" alt="" />
                        <p>Like</p>
                    </div>
                    <div className="comment">
                        <img src="" alt="" />
                        <p>Comment</p>
                    </div>
                    <div className="share">
                        <img src="" alt="" />
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
                            <div className="comment">
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
