import { useAuth } from '@/hooks/use-Auth'
import { useFetchTodoList } from '@/hooks/use-fetch-todo-list'
import { todosAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'

export const useTodos = () => {
  const setTodos = useSetAtom(todosAtom)
  const { data, refetch } = useFetchTodoList()
  const { fetchMe } = useAuth()

  // HACK:
  // ログイン時に fetchMe を叩いてるため、結果的に fetchMe を複数回実行していることになる。
  // こういう設計を許していると、リクエスト数が無駄に跳ね上がり、サーバー側が逼迫する原因になりかねないので、
  // もっといいやりかたがないか検討する。
  useEffect(() => {
    fetchMe()
    // NOTE: 初回レンダリング時にのみ fetchMe を実行したいため、依存配列は空のままにする
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (data) {
      setTodos(data)
    }
  }, [data, setTodos])

  return { data, refetch }
}
