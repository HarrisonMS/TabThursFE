import styled from '@emotion/styled/macro'
import { NavLink, Link } from 'react-router-dom'
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
export const SignOut = styled.button`
  height: 40px;
  color: white;
  background-color: #CF3A24;
  border-radius: 15px;
  font-size: ${styleVariables.fontSizeSmall};
  margin: ${props => props.m};
  padding: 0 10px;
  border: none;
  &:hover {
    background-color: #8F1D21;
  }
`
export const EmoLink = styled(Link)`
  text-decoration: none;
`