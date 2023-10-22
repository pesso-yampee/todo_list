import { PageTitle } from 'components/atoms/PageTitle'
import { useFetchDetailTodo } from 'hooks/useFetchDetailTodo'
import { useRouter } from 'next/router'
import styles from './style.module.css'

type Props = {
  text: string
}

export function DetailTodoTemplate({ text }: Props) {
  const router = useRouter()
  const id = Number(router.query.id) as number
  const { data } = useFetchDetailTodo(id)

  return (
    <div className={styles.container}>
      <PageTitle text={text} />
      <div className={styles.contents}>
        <div className={styles.title}>
          <span>{data?.title}</span>
        </div>
        <div className={styles.content}>
          <p>{data?.detail}</p>
        </div>
      </div>
    </div>
  )
}
