import { HTMLAttributes } from 'react'

type ButtonProps = HTMLAttributes<HTMLButtonElement>

type Props = {
  text: string
  type?: 'button' | 'submit'
} & ButtonProps

export const PrimaryButton = ({
  text,
  type = 'button',
  ...buttonProps
}: Props) => {
  return (
    <button
      type={type}
      className="box-border rounded-md border-2 border-blue-500 bg-blue-500 px-4 py-2 text-base font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-blue-500 focus:bg-white focus:text-blue-500"
      {...buttonProps}
    >
      {text}
    </button>
  )
}
