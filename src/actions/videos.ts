import axios from 'axios'

import { VIDEOS } from '../constants/api'

/** Get all public videos */
export const getVideos = () =>
  axios
    .get(VIDEOS, { params: { 'filters[isPublic][$eq]': true } })
    .then(({ data }) => data)
    .catch(console.log)

export const getDetail = (id: string) =>
  axios
    .get(`${VIDEOS}/${id}`)
    .then(({ data }) => data)
    .catch(console.log)

/** Edit video url */
export const editVideo = (id: number, newUrl: string) =>
  axios
    .put(`${VIDEOS}/${id}`, { data: { url: newUrl } })
    .then(({ data }) => data)
    .catch(console.log)

export const addVideo = (body) =>
  axios
    .post(VIDEOS, { data: body })
    .then(({ data }) => data)
    .catch(({ response: { data } }) => Promise.reject(data))
