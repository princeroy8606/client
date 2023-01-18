import React from 'react'
import './index.css'
function RightCommunitybar() {
    return (
        <div className='right-Com-sidebar'>
            <div className="news-container">
                <div className="news-head">
                    <h4>Latest News</h4>
                </div>
                <div className="news-box-container">
                    <div className="news-box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrztDmuSLZkq6263dkKjgroMRUUJBGm9Xj0pCsWt0EjfQcVEC2SpGQoy7vN9GCo3JbIrY&usqp=CAU" alt="" />
                        <p>03 jan 2023</p>
                        <h5>The New Core Java Project Is Starting Soon...</h5>
                    </div>
                    <div className="news-box">
                        <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202301/ezgif-sixteen_nine_209.jpg?size=178:99" alt="" />
                        <p>03 jan 2023</p>
                        <h5>Having perfected WFH, India Inc is confident of weathering another possible Covid wave</h5>
                    </div>
                    <div className="news-box">
                        <img src="https://images.livemint.com/img/2023/01/17/90x90/MICROSOFT-OPENAI--0_1673924833065_1673924833065_1673924873523_1673924873523.JPG" alt="" />
                        <p>03 jan 2023</p>
                        <h5>Microsoft will 'soon' add ChatGPT to Azure OpenAI Service: CEO Satya Nadella</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCommunitybar
