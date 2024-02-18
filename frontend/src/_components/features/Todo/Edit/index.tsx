'use client'

import { usePutUpdateTodo } from 'hooks/usePutUpdateTodo'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { todoAtom, todoEditModalAtom } from 'store'
import { TodoUpdateRequest, TodoUpdateResponse } from 'types/todo'
import { PrimaryButton } from '_components/common/Button/Primary'
import { SecondaryButton } from '_components/common/Button/Secondary'

type Props = {
  isOpen: boolean
}

export const EditTodoModal = ({ isOpen }: Props) => {
  const todoState = useAtomValue(todoAtom)
  const setTodoEditModalState = useSetAtom(todoEditModalAtom)
  const { doPost } = usePutUpdateTodo()
  const dialogRef = useRef<HTMLDivElement>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoUpdateResponse>({
    defaultValues: {
      title: todoState.title,
      detail: todoState.detail,
    },
  })
  const handleOnCloseModal = () => {
    setTodoEditModalState(() => ({ isOpen: false }))
  }
  const handleOnSubmit: SubmitHandler<TodoUpdateRequest> = (data) => {
    doPost({
      data,
      id: todoState.id,
      onSuccess: () => {
        console.log('成功しました')
      },
      onError: (error) => {
        console.error(error)
      },
    })
  }

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.focus()
    }
  }, [isOpen])

  return (
    <div
      ref={dialogRef}
      role={'dialog'}
      aria-modal={'true'}
      tabIndex={-1}
      aria-hidden={'false'}
      className='fixed inset-0 flex items-center justify-center backdrop-blur-sm'
    >
      <div className='rounded-3 w-[450px] border-2 border-gray-200 bg-white p-6'>
        <form
          noValidate
          onSubmit={handleSubmit(handleOnSubmit)}
          className='gap-6'
        >
          <div className='grid gap-2'>
            <div className='grid gap-2'>
              <div className='grid gap-2'>
                <div className='group relative rounded border-2 border-gray-200'>
                  <input
                    id={'title'}
                    type={'text'}
                    placeholder={'名前'}
                    className='group w-full p-2 duration-300 invalid:border-red-500 invalid:text-red-500 focus:pt-8'
                    {...register('title', {
                      required: true,
                    })}
                  />
                </div>
                {errors.title && <span>入力が必須な項目です</span>}
              </div>
              <div className='grid gap-2'>
                <div className='group relative rounded border-2 border-gray-200'>
                  <input
                    id={'detail'}
                    type={'text'}
                    placeholder={'詳細'}
                    className='group w-full p-2 duration-300 invalid:border-red-500 invalid:text-red-500 focus:pt-8'
                    {...register('detail', {
                      required: true,
                    })}
                  />
                </div>
                {errors.detail && <span>入力が必須な項目です</span>}
              </div>
            </div>
            <div className='flex gap-2'>
              <SecondaryButton
                text={'キャンセル'}
                onClickEvent={handleOnCloseModal}
              />
              <PrimaryButton text={'更新する'} style={{ width: '100%' }} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
