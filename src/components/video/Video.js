import React from 'react'
import './_video.scss'
import { AiFillEye } from 'react-icons/ai'
const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src="" alt="" />
                <span>05:43</span>
            </div>
            <div className="video__title">
                Create app in 5 minute #made by Chintu
            </div>
            <div className="video__detail">
                <span>
                    <AiFillEye />
                    5m Views
                </span>
                <span>5 days ago</span>
            </div>
            <div className="video__channel">
                <img src="" alt="" />
                <p>Rainbow Hat Jr</p>
            </div>
        </div>
    )
}

export default Video