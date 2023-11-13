import { apiClient } from 'constants/apiClient'
import { useCallback } from 'react'
import useSWR, { SWRResponse } from 'swr'
import { TodoType } from 'types/todo'

export const useFetchEditTodo = (id: string) => {
  const fetcher = useCallback(async () => {
    return await apiClient
      .get(`api/todos/edit/${id}`)
      .then((response) => response)
      .catch((error) => error)
  }, [id])

  const { data, error }: SWRResponse<{ data: TodoType }> = useSWR(
    id ? ['api/todos/edit', id] : null,
    fetcher
  )
  return { data: data?.data, error }
}
