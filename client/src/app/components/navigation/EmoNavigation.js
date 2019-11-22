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
export const SignOut = styled.button`
  height: 40px;
  color: white;
  background-color: #34495e;
  border-radius: 15px;
  font-size: ${styleVariables.fontSizeSmall};
  margin: ${props => props.m};
  padding: 0 10px;
  border: none;
  &:hover {
    background-color: #2c3e50;
  }
`
