import React, { useEffect, useState } from 'react'
import './_video.scss'
import { AiFillEye } from 'react-icons/ai'
import request from '../../api'
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {
    useNavigate
} from "react-router-dom";
const Video = ({ video }) => {
    const {
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: { medium },
        },
        contentDetails,
    } = video
    const id = video.id

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)
    const _videoId = id?.videoId || id;

    const navigate = useNavigate();
    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')

    useEffect(() => {
        const get_video_details = async () => {
            const { data: { items } } = await request('/videos', {
                params: {
                    part: 'contentDetails, statistics',
                    id: _videoId,
                },
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        get_video_details()
    }, [_videoId])

    useEffect(() => {
        const get_channel_icon = async () => {
            const { data: { items } } = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId,
                },
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_channel_icon()
    }, [channelId])
    const handleVideoClick = () => {
        navigate(`/watch/${_videoId}`)
    }

    return (
        <div className="video" onClick={handleVideoClick}>
            <div className="video__top">
                <LazyLoadImage src={medium.url} effect="blur" />
                {/* <img src={medium.url} alt="" /> */}
                <span className='video__top__duration'>{_duration}</span>
            </div>
            <div className="video__title">
                {title}
            </div>
            <div className="video__detail">
                <span>
                    <AiFillEye />
                    {numeral(views).format('0.a')} Views •{' '}
                </span>{' '}
                <span>{moment(publishedAt).fromNow()}</span>
            </div>
            <div className="video__channel">
                {/* <img src={channelIcon?.url} alt="" /> */}
                <LazyLoadImage src={channelIcon?.url} effect="blur" />
                <p>{channelTitle}</p>
            </div>
        </div>
    )
}

export default Video