import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from 'components/atoms/IconButton'
import { PAGE_PATH } from 'constants/pagePath'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'
import { TodoContentsAtom, TodoTitleAtom } from 'states/TodoState'
import { TodoType } from 'types/todo'

type Props = {
  list: TodoType[]
}

export const DetailButton = ({ list }: Props) => {
  const router = useRouter()
  const setTodoTitle = useSetRecoilState<string>(TodoTitleAtom)
  const setTodoContents = useSetRecoilState<string>(TodoContentsAtom)

  const transitionDetailTodoPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.closest('li')?.id

    // idが存在しない場合：後続処理を実行しない
    if (!id) return false

    const item = list.find((item) => item.id === id)

    if (item) {
      setTodoTitle(item.title)
      setTodoContents(item.contents)
    }

    router.push(`${PAGE_PATH.DETAIL}${id}`)
  }

  return (
    <IconButton
      ariaLabel="TODOの詳細情報を確認する"
      onClick={transitionDetailTodoPage}
      className="button-icon"
    >
      <FontAwesomeIcon icon={faNoteSticky} size="1x" />
    </IconButton>
  )
}