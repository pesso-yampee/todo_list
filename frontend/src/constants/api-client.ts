import axios from 'axios'

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_END,
  withCredentials: true,
  withXSRFToken: true,
})
