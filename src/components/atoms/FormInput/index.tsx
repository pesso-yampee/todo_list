import styles from 'components/atoms/Input/style.module.css'
import { UseFormRegister } from 'react-hook-form'
import { FormInputType } from 'types/todo'

type Props = {
  name: 'title' | 'contents'
  type?: 'email' | 'text' | 'password'
  placeholder?: string
  register: UseFormRegister<FormInputType>
}

export const FormInput = ({ placeholder, name, register, type }: Props) => {
  return (
    <input
      type={type ? type : 'text'}
      className={styles.input}
      placeholder={placeholder}
      {...register(name)}
    />
  )
}
