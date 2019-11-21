import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { EmoModalDiv, Cancel, Delete } from './EmoModal'
import { P } from '../../../emotionalThings/EmoTools'
import { deleteTab } from '../../../apis/DeleteTab'
import {UserTabsContext} from '../../../contexts/UserTabsContext'
import {GetTabArray} from '../../../apis/GetTabArray'

const Modal = ({ visible, close, deleteId }) => {
  const { setUserTabArray } = useContext(UserTabsContext)
  const newTabArray = GetTabArray()
  useEffect(() => setUserTabArray(newTabArray), [newTabArray])
  return visible &&
  ReactDOM.createPortal(
    <>
      <EmoModalDiv>
        <Delete m='15px 13px 15px 0' onClick ={deleteTab(deleteId), close}>Confirm</Delete>
        <Cancel m='15px 0 15px 0' onClick={close}>Cancel</Cancel>
        <P textAlign='center'>Are you sure you want to delete this tab?</P>
      </EmoModalDiv>
    </>,
    document.body
  )
  }
export default Modal
