import profile from '../../assets/profile.png'
import Posts from './Posts'
import './index.css'
import { useState, useEffect } from 'react'

const CommunityHomebar = () => {
    const [data, seData] = useState({})
    const [text, setText] = useState("")
    const [file, setFile] = useState(null)
    const time = new Date();
    let id = 4;

    const handleClick = () => {
        seData({
            id: id,
            name: "jacob",
            date: "01-12-2023",
            postText: text,
            image: file,
            profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKXvbOTtM0YatiO0WJ06pJmvaj6a7Dq2kJtg&usqp=CAU',
            likes: 0,
        });
    }
    return (
        <div className="community-homebar">
            <div className="activity-feed">
                <h1>Activity Feed</h1>
                <div className="post-box">
                    <div className="user-details">
                        <img src={profile} alt="" />
                        <h4>Jecob</h4>
                    </div>
                    <div className="add-text-post">
                        <input type='text' className='post-text' placeholder='Write here or use @ to mention someone' onChange={(e) => setText(e.target.value)} />
                        <input type='file' className='post-file'
                            onChange={e => setFile(URL.createObjectURL(e.target.files[0]))} />
                        <button onClick={handleClick}>Post</button>
                    </div>
                </div>
            </div>
            <Posts data={data} />
        </div>
    )
}

export default CommunityHomebar;