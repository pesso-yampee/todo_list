'use client'

import { HeaderNavigation } from '_components/common/header-navigation'
import { EditTodoModal } from '_components/features/Todo/Edit'

import { useAtomValue } from 'jotai'
import { TodoList } from '_components/features/Todo/List'

import dynamic from 'next/dynamic'
import { todoEditModalAtom } from 'store'
import { AddTodoArea } from '_components/features/Todo/Add'

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
  const todoEditModalState = useAtomValue(todoEditModalAtom)
  
  return (
    <>
      <div className="mx-6 pb-6 pt-20">
        <HeaderNavigation />
        <div className="min-w-[450px]">
          <h1 className="text-center text-lg font-bold">TODOリスト</h1>
          <AddTodoArea />
          <DynamicAppSuspense>
            <TodoList />
          </DynamicAppSuspense>
        </div>
      </div>
      {todoEditModalState.isOpen && (
        <EditTodoModal isOpen={todoEditModalState.isOpen} />
      )}
    </>
  )
}
