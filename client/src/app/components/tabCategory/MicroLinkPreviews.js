import React from 'react'
import Microlink from '@microlink/react'
import { pattern } from '../../utils/urlPattern'

const MicrolinkPreview = props => (
  <Microlink
    url={
      !pattern.test(props.address) ? 'https://' + props.address : props.address
    }
  />
)

export default MicrolinkPreview
