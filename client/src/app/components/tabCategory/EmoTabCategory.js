import styled from '@emotion/styled/macro'
import { styleVariables } from '../../emotionalThings/EmoTools'

export const Delete = styled.button`
  height: 40px;
  color: white;
  background-color: #e74c3c;
  border-radius: 15px;
  font-size: ${styleVariables.fontSizeSmall};
  margin: ${props => props.m};
  padding: 0 10px;
  border: none;
  &:hover {
    background-color: #c0392b;
  }
`
export const Edit = styled.button`
  height: 40px;
  color: white;
  background-color: #3498db;
  border-radius: 15px;
  font-size: ${styleVariables.fontSizeSmall};
  margin: ${props => props.m};
  padding: 0 10px;
  border: none;
  &:hover {
    background-color: #2980b9;
  }
`

export const ButtonHolder = styled.div`
  margin-right: 20px;
  position: absolute;
  right: 0;
`
export const Hack = styled.p`
  display: none;
`