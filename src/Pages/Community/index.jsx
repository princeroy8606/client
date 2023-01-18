
import LeftCommunitybar from '../../components/LeftCommunityBar/LeftCommunitybar';
import CommunityHomebar from '../../components/communityHomebar/CommunityHomebar';
import RightCommunitybar from '../../components/RightCommunityBar/RightCommunitybar';
import '../../App.css'

function Community() {
    return (
        <div className='community-home' >
            {/* <div className="front-page">
                <img src="https://149351115.v2.pressablecdn.com/wp-content/uploads/2018/12/Stack-Gives-Back-2018--1200x675.png" alt="" />
            </div> */}
            <div className='community-workspace'>
                <LeftCommunitybar />
                <CommunityHomebar />
                <RightCommunitybar />
            </div>
        </div>
    )
}

export default Community;