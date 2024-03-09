import { useCallback,useState } from "react"

export const useDisclosure = () => {
  const [state, setState] = useState<boolean>(false)

  const onOpen = useCallback(() => {
    setState(true)
  }, [setState])

  const onClose = useCallback(() => {
    setState(false)
  }, [setState])

  return {
    isOpen: state,
    onOpen,
    onClose,
  }
}