import styled from '@emotion/styled/macro'
import { NavLink } from 'react-router-dom'

export const EmoNavLink = styled(NavLink)`
  color: darkgrey;
  text-decoration: none;
  margin: 10px;
  text-align: center;
  &:hover {
    color: lightslategrey;
  }
`
