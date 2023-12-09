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
  {ssr: false}
)

export default function Page() {
  return (
    <Box maxWidth={'450px'} margin={'0 auto'} width={'100%'}>
      <Typography variant={'h5'} gutterBottom textAlign={'center'}>
        TODOリスト
      </Typography>
      <AddTodo />
      <DynamicAppSuspense>
        <TodoList />
      </DynamicAppSuspense>
    </Box>
  )
}
