import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { getVideosBySearch } from '../redux/action/videos.action'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import VideoHorizontal from '../components/videoHorizontal.js/VideoHorizontal'
import { Container } from 'react-bootstrap'

const SearchScreen = () => {
    const { query } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideosBySearch(query))
    }, [query, dispatch])

    const { videos, loading } = useSelector(state => state.searchedVideos)
    return (
        <Container>
            {
                !loading ? (
                    videos?.map(video => <VideoHorizontal video={video} key={video.id.videoId} searchScreen />
                    )) : (
                    <h1>Loading...</h1>
                )
            }
        </Container>
    )
}

export default SearchScreen