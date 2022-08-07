import axios from 'axios'
const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: "AIzaSyAOzgHpxtmeGdlC-dPGq0mRfI6ct69mESk",
    },
})


export default request