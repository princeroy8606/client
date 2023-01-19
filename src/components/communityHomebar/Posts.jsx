import React, { useState, useEffect } from 'react'
import searchIcon from '../../assets/search.png'
import Post from './Post'
function Posts({ data }) {

    const [post, setPost] = useState([
        {
            id: 1,
            name: "Tess",
            date: "01 jan 2023",
            postText: "Lets start the year on a high note! We are excited to announce our 14th Stack Gives Back.",
            image: 'https://149351115.v2.pressablecdn.com/wp-content/uploads/2023/01/StackGivesBack-2022.png',
            vedio: '',
            profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfLCs5lVr1Ev5xUChMTIDKUSn5C8Wa223HA&usqp=CAU",
            likes: '56'
        },
        {
            id: 2,
            name: "Carton",
            date: "02 jan 2023",
            postText: "It’s been a busy quarter for the company. We celebrated a handful of big milestones over the last three months. We added a new Chief Technology Officer, Jody Bailey, to our leadership team, announced Stack Overflow for Teams entering the Microsoft Azure Marketplace, launched exciting initiatives like Staging Ground, and released insights from this year’s Developer Survey.",
            image: 'https://149351115.v2.pressablecdn.com/wp-content/uploads/2022/07/q2-2022-ceo_00.png',
            vedio: '',
            profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAf9gA-CRlCv5tHlzbNDJnmqvnNG1jRrHGA&usqp=CAU",
            likes: '340'
        },
        {
            id: 3,
            name: "Lagos",
            date: "31 dec 2023",
            postText: "From Chemistry to Raspberry Pi: Sites covering Q&A on tech, leisure, language, and more celebrate their first decade.",
            image: 'https://149351115.v2.pressablecdn.com/wp-content/uploads/2021/08/se-10-year.png',
            vedio: '',
            profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHdqMHlM-9YoVRL5CkDPXLdPC2VK3K9OMKg&usqp=CAU",
            likes: '1080'
        }
    ]);

    console.log(data)
    console.log(Object.keys(data))
    useEffect(() => {
        if (data && Object.keys(data).length !== 0) {
            setPost([data, ...post])
        }
        console.log(post)
    }, [data]);




    return (
        <div className='postarea-container'>
            <div className="postarea-top">
                <div className="left-cover">
                    <div className="title">
                        <h4>Posts</h4>
                    </div>
                    <div className="title">
                        <h4>Latest</h4>
                    </div>
                    <div className="title">
                        <h4>Newsletter</h4>
                    </div>
                </div>
                <div className="search-container">
                    <div className="search-box">
                        <img src={searchIcon} alt="hello" />
                        <input type="text" placeholder='Search Feed...' />
                    </div>
                </div>
            </div>
            <div className="post-container">
                {
                    post?.map((item) => (
                        <Post post={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Posts
