import { AxiosResponse } from "axios"
import { apiClient } from "constants/apiClient"
import useSWR,{ SWRResponse } from 'swr'

export const useFetchTodo = () => {
  const fetcher = async (url: string) => {
    try {
      const response: AxiosResponse = await apiClient.get(url)
      return response.data
    } catch (error) {
      window.alert(error)
    }
  }
  const { data, error, mutate, isLoading }: SWRResponse = useSWR<SWRResponse>('/task', fetcher)


  return {
    data,
    error,
    mutate,
    isLoading,
  }
}