import styled from '@emotion/styled/macro'
import { styleVariables } from '../../../emotionalThings/EmoTools'

export const EmoModalDiv = styled.div`
  position: fixed;
  top: calc(40% - 100px);
  left: calc(50% - 100px);
  width: 200px;
  height: 200px;
  background-color: white;
  padding: 10px;
  border-radius: 15px;
  box-shadow: ${styleVariables.boxShadow};
`

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
export const Cancel = styled.button`
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