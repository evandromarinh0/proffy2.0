import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Upper = styled.View`
  flex: 1;
  align-items: center;
  background: #8257E5;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const Logo = styled.Image``;

export const Description = styled.Text`
  color: #d4c2ff;
  font-family: 'Archivo-Regular';
  font-size: 14px;
  line-height: 18px;
  max-width: 160px;
`;

export const Lower = styled.View`
  flex: 1;
  padding: 32px 30px;
`;

export const BackButton = styled.TouchableOpacity``;

export const Login = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  color: #32264d;
  font-size: 24px;
  font-family: 'Poppins-SemiBold';
  margin-top: 32px;
`;

export const LowerDescription = styled.Text`
  color: #6a6180;
  font-size: 14px;
  font-family: 'Poppins-Regular';
  line-height: 24px;
  margin-bottom: 32px;
`;