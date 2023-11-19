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
  const { data, mutate } = useSWR<{ data: TodoType[] }, Error>(
    '/api/todos',
    fetcher,
    {
      suspense: true,
      revalidateOnFocus: false,
    }
  )

  const refetch = () => {
    mutate()
  }

  return {
    data: data?.data,
    refetch,
  }
}
