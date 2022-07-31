import { HOME_VIDEOS_REQUEST } from "../actionType"
import request from "../../api"

export const getPopularVideos = () => async dispatch => {
    try {

        dispatch({
            type: HOME_VIDEOS_REQUEST,
        })
        request("/videos", {
            params: {
                part: "snippet, contentDetails, statistics",
                chart: 'mostPopular',
                regionCode: "IN",
                maxResults: 20,
            }
        })

    } catch (error) {

    }
}