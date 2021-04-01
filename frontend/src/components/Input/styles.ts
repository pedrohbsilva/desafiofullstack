import styled, { css } from 'styled-components';
import { ContainerProps } from '../../interfaces';

export const Container = styled.div<ContainerProps>`
  align-items: center;
  border: 1px solid #cccccc;
  color: grey;
  display: flex;
  background: white;
  height: 36px;
  margin-bottom: 8px;
  width: 100%;
  ${(props) =>
    props.isFocused &&
    css`
      color: orange;
      border-color: orange;
    `}
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #f10;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: orange;
    `}
  input {
    background: transparent;
    border: 0;
    color: grey;
    font-family: 'Ubuntu';
    flex: 1;
    font-size: 16px;

    &::placeholder {
      color: grey;
      text-align: left;
    }
  }
  > svg {
    margin-right: 5px;
  }
`;
export const Error = styled.div`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #f10;
    color: grey;

    &::before {
      border-color: #f10 transparent;
    }
  }
`;
