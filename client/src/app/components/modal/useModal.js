import { useState } from 'react'

const useModal = () => {
  const [visible, setVisible] = useState(false)
  const showHideModal = () => {
    setVisible(!visible)
  }
  return {
    visible,
    showHideModal,
  }
}

export default useModal
