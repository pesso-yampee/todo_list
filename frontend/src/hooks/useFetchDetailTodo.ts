import { apiClient } from '@/constants/apiClient'
import { TodoType } from '@/types/todo'
import { useCallback } from 'react'
import useSWR, { SWRResponse } from 'swr'

export const useFetchDetailTodo = (id: number) => {
  const fetcher = useCallback(async () => {
    return await apiClient
      .get(`api/todos/${id}`)
      .then((response) => response)
      .catch((error) => error)
  }, [id])

  const { data, error, isLoading }: SWRResponse<{ data: TodoType }> = useSWR(
    id ? ['api/todos', id] : null,
    fetcher
  )
  return { data: data?.data, error, isLoading }
}
