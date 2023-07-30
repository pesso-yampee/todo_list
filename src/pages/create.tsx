import type { NextPage } from 'next'
import { CreateTodoTemplate } from 'components/templates/createTodoTemplate'

const CreateTodoPage: NextPage = () => {
  return <CreateTodoTemplate text="Add New" />
}
export default CreateTodoPage
