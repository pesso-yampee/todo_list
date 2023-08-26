import { Button } from 'components/atoms/Button'
import { FormInput } from 'components/atoms/FormInput'
import { PageTitle } from 'components/atoms/PageTitle'
import { Navigation } from 'components/organisms/navigation'
import { PAGE_PATH } from 'constants/pagePath'
import { usePutEditTodo } from 'hooks/usePutEditTodo'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { TodoContentsAtom, TodoIdAtom, TodoTitleAtom } from 'states/TodoState'
import { FormInputType } from 'types/todo'
import styles from './style.module.css'

type Props = {
  text: string
}

export function EditTodoTemplate({ text }: Props) {
  const router = useRouter()
  const todoTitle = useRecoilValue<string>(TodoTitleAtom)
  const todoContents = useRecoilValue<string>(TodoContentsAtom)
  const todoItemId = useRecoilValue<string>(TodoIdAtom)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputType>({
    defaultValues: {
      title: todoTitle,
      contents: todoContents,
    },
  })
  const { doPut } = usePutEditTodo()
  const onSubmit: SubmitHandler<FormInputType> = (data) => {
    doPut({
      data,
      todoItemId,
      onSuccess: () => {
        router.push(`${PAGE_PATH.EDIT}${todoItemId}`)
      },
      onError: (error) => {
        console.error(error)
      },
    })
  }

  return (
    <div className={styles.container}>
      <Navigation />
      <PageTitle text={text} />
      <div className={styles.contents}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput register={register} name="title" />
          <FormInput register={register} name="contents" />
          <Button type="submit" className="button-primary">
            <span>Edit Todo</span>
          </Button>
        </form>
      </div>
    </div>
  )
}
