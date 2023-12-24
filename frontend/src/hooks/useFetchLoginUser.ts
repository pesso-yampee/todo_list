import { apiClient } from 'constants/apiClient'
import useSWR from 'swr'

export const useFetchLoginUser = () => {
  const fetcher = () => {
    return apiClient
      .get('api/user')
      .then((response) => response)
      .catch((error) => error)
  }

  const { data, error, isLoading } = useSWR('api/user', fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: true,
    shouldRetryOnError: false,
  })

  return {
    data,
    error,
    isLoading,
  }
}
