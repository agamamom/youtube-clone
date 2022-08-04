import React, { useEffect } from 'react'
import './WatchScreen.scss'
import { Row, Col } from 'react-bootstrap'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import VideoHorizontal from '../../components/videoHorizontal.js/VideoHorizontal'
import Comments from '../../components/comments/Comments'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getVideoById } from '../../redux/action/videos.action'
const WatchScreen = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getVideoById(id))
    }, [dispatch, id])

    // const { videos, loading: relatedVideosLoading } = useSelector(
    //     state => state.relatedVideos
    // )

    const { video, loading } = useSelector(state => state.selectedVideo)

    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen__player">
                    <iframe src={`https://www.youtube.com/embed/${id}`}
                        frameBorder="0"
                        title={video?.snippet?.title}
                        allowFullScreen
                        width='100%'
                        height='100%'
                    />
                </div>
                {
                    !loading ? (
                        <VideoMetaData video={video} videoId={id} />
                    ) : (
                        <h6>Loading...</h6>
                    )
                }
                <Comments
                    videoId={id}
                    totalComments={video?.statistics?.commentCount}
                />
            </Col>
            <Col lg={4}>
                {[...Array(10)].map(() => (
                    <VideoHorizontal />
                ))}
            </Col>
        </Row>
    )
}

export default WatchScreen