import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ visible, close }) =>
  visible &&
  ReactDOM.createPortal(
    <>
      <div>
        <button onClick={close}>Close</button>
        <p>Testing 123</p>
      </div>
    </>,
    document.body
  )

export default Modal
