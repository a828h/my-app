import axios, { AxiosResponse } from 'axios'
import { errorToast } from '../Components/Toast'
interface IError {
    response: {
        data: {
            message: string
        }
    }
}
const client = axios.create({ baseURL: 'https://mizebazi.com' })

export const request = ({ ...options }) => {
    // client.defaults.headers.common.Authorization = "Bearer token";
    const onSuccess = (response: AxiosResponse) => {
        return response.data.data
    }
    const onError = (error: IError): void => {
        errorToast(error.response.data.message)
        throw error
    }

    return client(options).then(onSuccess).catch(onError)
}
