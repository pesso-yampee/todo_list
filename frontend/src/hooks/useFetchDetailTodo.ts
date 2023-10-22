import { apiClient } from 'constants/apiClient'
import { useCallback } from 'react'
import useSWR, { SWRResponse } from 'swr'
import { TodoType } from 'types/todo'

export const useFetchDetailTodo = (id: number) => {
  const fetcher = useCallback(async () => {
    return await apiClient
      .get(`api/todos/detail/${id}`)
      .then((response) => response)
      .catch((error) => error)
  }, [id])

  const { data, error, isLoading }: SWRResponse<{ data: TodoType }> = useSWR(
    id ? ['api/todos/detail', id] : null,
    fetcher
  )
  return { data: data?.data, error, isLoading }
}
