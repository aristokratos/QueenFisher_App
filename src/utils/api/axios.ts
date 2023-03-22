import axios from 'axios'

const baseUrl = "https://localhost:7031/api/"

export const apiPost = (path: any, data: any) => {
    const config ={
        headers:{
            Authorization: `Bearer ${localStorage.getItem('signature')}`
        }
    }
    return axios.post(`${baseUrl}${path}`, data, config)
}