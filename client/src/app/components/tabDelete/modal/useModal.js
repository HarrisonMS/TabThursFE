import { useState } from 'react'

const useModal = () => {
  const [visible, setVisible] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const showHideModal = e => {
    setVisible(!visible)
    setDeleteId(e.target.value)
  }
  return {
    visible,
    showHideModal,
    deleteId,
  }
}

export default useModal
