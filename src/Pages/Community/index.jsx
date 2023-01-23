
import LeftCommunitybar from '../../components/LeftCommunityBar/LeftCommunitybar';
import CommunityHomebar from '../../components/communityHomebar/CommunityHomebar';
import RightCommunitybar from '../../components/RightCommunityBar/RightCommunitybar';
import '../../App.css'

function Community() {
    return (
        <div className='community-home' >
            {/* <div className='community-workspace'> */}
            <LeftCommunitybar />
            <CommunityHomebar />
            <RightCommunitybar />
            {/* </div> */}
        </div>
    )
}

export default Community;