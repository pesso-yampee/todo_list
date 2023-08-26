import { Button } from 'components/atoms/Button'
import { FormInput } from 'components/atoms/FormInput'
import { PageTitle } from 'components/atoms/PageTitle'
import { Navigation } from 'components/organisms/navigation'
import { PAGE_PATH } from 'constants/pagePath'
import { usePostCreateTodo } from 'hooks/usePostCreateTodo'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormInputType } from 'types/todo'
import styles from './style.module.css'

type Props = {
  text: string
}

export function CreateTodoTemplate({ text }: Props) {
  const router = useRouter()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputType>()
  const { doPost } = usePostCreateTodo()

  const onSubmit: SubmitHandler<FormInputType> = async (data) => {
    await doPost(data)
    router.push(PAGE_PATH.TOP)
  }

  return (
    <div className={styles.container}>
      <Navigation />
      <PageTitle text={text} />
      <div className={styles.contents}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput placeholder="Title" name="title" register={register} />
          <FormInput
            placeholder="Contents"
            name="contents"
            register={register}
          />
          <div className={styles.flexContainer}>
            <Button
              type="reset"
              className="button-cancel"
              onClick={() => reset()}
            >
              <span>Reset</span>
            </Button>
            <Button type="submit" className="button-primary">
              <span>Create todo</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
