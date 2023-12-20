import axios from 'axios'

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_END,
  withCredentials: true,
  xsrfCookieName: process.env.NEXT_PUBLIC_FRONT_END?.toUpperCase() + '-XSRF-TOKEN'
})
