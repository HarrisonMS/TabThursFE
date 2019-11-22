import React from 'react'
import ReactDOM from 'react-dom'
import { EmoModalDiv, Cancel, Delete } from './EmoModal'
import { P, EmoLink } from '../../../emotionalThings/EmoTools'
import { deleteTab } from '../../../apis/DeleteTab'

const Modal = ({ visible, close, deleteId }) => {
  return (
    visible &&
    ReactDOM.createPortal(
      <>
        <EmoModalDiv>
          <EmoLink to='/home'>
            <Delete m='15px 13px 15px 0' onClick={e => deleteTab(deleteId)}>
              Confirm
            </Delete>
          </EmoLink>
          <Cancel m='15px 0 15px 0' onClick={close}>
            Cancel
          </Cancel>
          <P textAlign='center'>Are you sure you want to delete this tab?</P>
        </EmoModalDiv>
      </>,
      document.body
    )
  )
}
export default Modal
