import axios from 'axios'
import { API_BASE_URL } from '../constants'

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: API_BASE_URL,
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}