import React from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from "react-show-more-text";
const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
    const { channelId, channelTitle, description, title, publishedAt } = snippet;
    const { viewCount, likeCount, dislikeCount } = statistics;

    return (
        <div className="videoMetaData py-2">
            <div className="videoMetaData__top">
                <h5>Video Title</h5>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <span>
                        {numeral(10000).format('0.a')} Views •
                        {moment('2022-02-08').fromNow()}
                    </span>

                    <div>
                        <span className='mr-3'>
                            <MdThumbUp size={26} />
                            {numeral(10000).format('0.a')}
                        </span>
                        <span className='mr-3'>
                            <MdThumbDown size={26} />
                            {numeral(10000).format('0.a')}
                        </span>
                    </div>
                </div>
            </div>
            <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
                <div className="d-flex">
                    <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt=""
                        className='rounder-circle mr-3'
                    />
                    <div className="d-flex flex-column">
                        <span>Backend</span>
                        <span>
                            {numeral(10000).format('0.a')} Subscriber
                        </span>
                    </div>
                </div>
                <button className="btn border-0 p-2 m-2">
                    Subcribers
                </button>
            </div>
            <div className="videoMetaData__description">
                <ShowMoreText
                    lines={3}
                    more="SHOW MORE"
                    less="SHOW LESS"
                    anchorClass="showMoreText"
                    expanded={false}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ea, iste dolor dicta officiis quia, laboriosam est nihil itaque corporis totam distinctio sapiente assumenda voluptas sequi laborum doloremque asperiores aut? Culpa, consequatur?
                    elit. Esse ea, iste dolor dicta officiis quia, laboriosam est nihil itaque corporis totam distinctio sapiente assumenda voluptas sequi laborum doloremque asperiores aut? Culpa, consequatur?
                </ShowMoreText>
            </div>
        </div>
    )
}

export default VideoMetaData