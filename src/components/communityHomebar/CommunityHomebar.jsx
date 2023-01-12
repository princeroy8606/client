import profile from  '../../assets/profile.png'
import Posts from './Posts'
import './index.css'

const CommunityHomebar = () => {
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
                    <input type='text' className='post-text' placeholder='Write here or use @ to mention someone'/>
                    </div>
                </div>
            </div>
            <Posts/>
        </div>
    )
}

export default CommunityHomebar;