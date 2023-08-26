import { PageTitle } from 'components/atoms/PageTitle'
import { Navigation } from 'components/organisms/navigation'
import { TodoItem } from 'components/organisms/todoItem'
import { apiClient } from 'constants/apiClient'
import useSWR from 'swr'
import styles from './style.module.css'

type Props = {
  text: string
}

export function ListTemplate({ text }: Props) {
  const fetcher = async (url: string) => {
    try {
      const res = await apiClient.get(url)
      return res.data
    } catch (error) {
      window.alert(error)
    }
  }

  const { data } = useSWR('/task', fetcher)

  if (data) {
    return (
      <div className={styles.container}>
        <Navigation />
        <PageTitle text={text} />
        <div className={styles.contents}>
          <TodoItem list={data} />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <p>データがありません。</p>
      </div>
    )
  }
}
