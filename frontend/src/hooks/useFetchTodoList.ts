import { apiClient } from 'constants/apiClient'
import useSWR from 'swr'
import { TodoType } from 'types/todo'

export const useFetchTodoList = () => {
  const fetcher = async (url: string) => {
    return await apiClient
      .get(url)
      .then((response) => response)
      .catch((error) => error)
  }
  const { data, error, mutate } = useSWR<{ data: TodoType[] }, Error>(
    '/api/todos',
    fetcher,
    { suspense: true }
  )

  const refetch = () => {
    mutate()
  }

  return {
    data: data?.data,
    error,
    refetch,
  }
}
