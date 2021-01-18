import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ContainerProps {
  custom?: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  background: ${props => props.custom ? '#8257e5' : '#04d361' };
  height: 56px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 32px;
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo-SemiBold';
  font-size: 16px;
  color: #fff;
`;