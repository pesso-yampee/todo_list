type Props = {
  severity: 'success' | 'error'
  text: string
}

export const Alert = ({ severity, text }: Props) => {
  return (
    <div
      className={`align-center fixed right-0 top-0 flex justify-center ${
        severity === 'success' ? 'bg-blue-500' : 'bg-red-500'
      }`}
    >
      <span className='font-bold text-white'>{text}</span>
    </div>
  )
}
