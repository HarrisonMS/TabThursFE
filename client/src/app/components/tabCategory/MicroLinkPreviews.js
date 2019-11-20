import React from 'react'
import Microlink from '@microlink/react'

const MicrolinkPreview = props => {
  const pattern = new RegExp('^(https?|ftp)://')
  return (
    <Microlink
      url={
        !pattern.test(props.address)
          ? 'https://' + props.address
          : props.address
      }
    />
  )
}

export default MicrolinkPreview
