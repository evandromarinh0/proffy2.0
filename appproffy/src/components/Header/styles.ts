import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #6842C2;
`;

export const Content = styled.View`
  height: 75px;
  background: #774dd6;
  padding: 32px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled(BorderlessButton)`
  height: 12px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-family: 'Archivo-Medium';
  color: #d4c2ff;
`;

export const Logo = styled.Image`
  height: 12px;
  width: 50px;
`;