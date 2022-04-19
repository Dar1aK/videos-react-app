import axios from "axios";

import { VIDEOS } from "../constants/api";

export const getVideos = () => {
    return axios.get(VIDEOS).then(({data}) => data).catch(console.log)
}

export const getVideo = (id: number) => {
    return axios.get(`${VIDEOS}/${id}`).then(({data}) => data).catch(console.log)
}

export const editVideo = (id: number, newUrl: string) => {
    return axios.put(`${VIDEOS}/${id}`, { data: { url: newUrl } }).then(({data}) => data).catch(console.log)
}