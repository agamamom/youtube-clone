import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { getVideosBySearch } from '../redux/action/videos.action'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import VideoHorizontal from '../components/videoHorizontal/VideoHorizontal'
import { Container } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

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
                    <SkeletonTheme color="#343a40"
                        highlightColor='#3c4147'>
                        <Skeleton width="100%" height="150px" count={20} />
                    </SkeletonTheme>
                )
            }
        </Container>
    )
}

export default SearchScreen