type Props = {
  text: string
  onClickEvent: () => void
}

export const SecondaryButton = ({ text, onClickEvent }: Props) => {
  return (
    <button
      type="button"
      className="box-border w-full rounded-md border-2 border-gray-300 bg-gray-300 px-4 py-2 text-base font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-300 focus:bg-white focus:text-gray-300"
      onClick={() => onClickEvent()}
    >
      {text}
    </button>
  )
}
