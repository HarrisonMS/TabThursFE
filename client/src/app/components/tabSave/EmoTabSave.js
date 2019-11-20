import styled from '@emotion/styled/macro'
import { styleVariables } from '../../emotionalThings/EmoTools'

export const Save = styled.button`
  height: 45px;
  width: 40%;
  color: white;
  background-color: #1abc9c;
  border-radius: 15px;
  font-size: ${styleVariables.fontSizeP};
  margin: ${props => props.m};
  padding: 0 10px;
  border: none;
  &:hover {
    background-color: #16a085;
  }
`