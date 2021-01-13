import { css } from 'styled-components';
import styled from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  height: 64px;
  background: #fafafc;
  border: 1px solid #E6E6F0;
  border-radius: 8px;
  padding: 0 16px;
  justify-content: center;

  ${props => props.isFocused && css`
    border-color: #8557e5;
  `}
  border-width: 2px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #6a6180;
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;