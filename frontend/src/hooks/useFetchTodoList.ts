import { apiClient } from 'constants/apiClient'
import useSWR, { SWRResponse } from 'swr'

export const useFetchTodoList = () => {
  const fetcher = (url: string) => {
    return apiClient
      .get(url)
      .then((response) => response.data)
      .catch((error) => error)
  }
  const { data, error, mutate, isLoading }: SWRResponse = useSWR<SWRResponse>(
    'api/todos',
    fetcher
  )

  const refetch = () => {
    mutate()
  }

  return {
    data,
    error,
    refetch,
    isLoading,
  }
}
