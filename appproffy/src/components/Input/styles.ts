import styled from 'styled-components/native';
import { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  hasError: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  height: 64px;
  background: #fafafc;
  border-radius: 10px;
  padding: 0 16px;
  justify-content: center;
  margin-bottom: 1px;

  border-width: 2px;
  border-color: #e6e6f0;

  ${props => props.hasError && css`
    border-color: #c53030;
    border-width: 2px;
  `}

  ${props => props.isFocused && css`
    border-width: 2px;
    border-color: #8557e5;
  `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #6a6180;
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;