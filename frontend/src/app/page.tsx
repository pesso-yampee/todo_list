'use client'

import { AddTodo } from '_components/features/Todo/Add'
import { EditTodoModal } from '_components/features/Todo/Edit'

import { TodoList } from '_components/features/Todo/List'
import {
  useTodoItemEditModalState,
  useTodoItemEditModalStateMutators,
} from 'globalStates/todoItemEditModalState'

import dynamic from 'next/dynamic'

/**
 * NOTE:
 * dynamic import を活用することで非同期にモジュールを読み込むことができる。（返り値はPromise）
 * オプションに {ssr: false} を指定することで、クライアントサイドでレンダリングすることを可能とする。
 * ページ読み込み時に必要なJSファイルを削減できるため、ページ表示速度改善にもつながる。
 */
const DynamicAppSuspense = dynamic(
  () => import('../_components/common/AppSuspense'),
  { ssr: false }
)

export default function Page() {
  const todoItemEditModalState = useTodoItemEditModalState()
  const { setStateEditModal } = useTodoItemEditModalStateMutators()

  return (
    <>
      <div className="mx-6 grid h-screen place-items-center pt-20">
        <div className="min-w-[450px]">
          <h1 className="text-center text-lg font-bold">TODOリスト</h1>
          <AddTodo />
          <DynamicAppSuspense>
            <TodoList />
          </DynamicAppSuspense>
        </div>
      </div>
      {todoItemEditModalState.isOpen && (
        <EditTodoModal
          setStateEditModal={setStateEditModal}
          isOpen={todoItemEditModalState.isOpen}
        />
      )}
    </>
  )
}
