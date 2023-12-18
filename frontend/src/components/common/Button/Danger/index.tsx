import { HTMLAttributes } from "react"

type ButtonProps = HTMLAttributes<HTMLButtonElement>

type Props = {
  text: string
} & ButtonProps

export const DangerButton = ({ text, ...buttonProps }: Props) => {
  return (
    <button
      type="button"
      className="box-border w-full rounded-md border-2 border-red-500 bg-red-500 px-4 py-2 text-base font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-red-500 focus:bg-white focus:text-red-500"
      {...buttonProps}
    >
      {text}
    </button>
  )
}
