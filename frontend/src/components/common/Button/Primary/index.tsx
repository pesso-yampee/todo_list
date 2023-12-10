type Props = {
  itemId?: string
  text: string
  type?: 'button' | 'submit'
  onClickEvent?: (id: string) => void
}

export const PrimaryButton = ({
  itemId,
  text,
  type = 'button',
  onClickEvent,
}: Props) => {
  return (
    <button
      type={type}
      className="box-border w-full rounded-md border-2 border-blue-500 bg-blue-500 px-4 py-2 text-base font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-blue-500 focus:bg-white focus:text-blue-500"
      onClick={() => onClickEvent && itemId && onClickEvent(itemId)}
    >
      {text}
    </button>
  )
}
