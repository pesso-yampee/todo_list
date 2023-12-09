'use client'

import { AddTodo } from 'components/features/todo/Add'
import { EditTodoModal } from 'components/features/todo/Edit'

import { TodoList } from 'components/features/todo/List'
import {
  useTodoItemEditModalState,
  useTodoItemEditModalStateMutators,
} from 'globalStates/todoItemEditModalState'

import { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Todo List',
}

/**
 * NOTE:
 * dynamic import を活用することで非同期にモジュールを読み込むことができる。（返り値はPromise）
 * オプションに {ssr: false} を指定することで、クライアントサイドでレンダリングすることを可能とする。
 * ページ読み込み時に必要なJSファイルを削減できるため、ページ表示速度改善にもつながる。
 */
const DynamicAppSuspense = dynamic(
  () => import('../components/common/AppSuspense'),
  { ssr: false }
)

export default function Page() {
  const todoItemEditModalState = useTodoItemEditModalState()
  const { setStateEditModal } = useTodoItemEditModalStateMutators()
  return (
    <>
      <div className="mx-6 grid h-screen place-items-center">
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
