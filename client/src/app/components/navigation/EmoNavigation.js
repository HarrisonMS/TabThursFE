import styled from '@emotion/styled/macro'
import { NavLink } from 'react-router-dom'
import { styleVariables } from '../../emotionalThings/EmoTools'

export const EmoNavLink = styled(NavLink)`
  color: darkgrey;
  text-decoration: none;
  margin: 20px 10px;
  font-size: ${styleVariables.fontSizeP};
  font-family: ${styleVariables.secondaryFontFamily};
  &:hover {
    color: lightslategrey;
  }
`
