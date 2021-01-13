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
  padding: 64px 30px;
`;

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
`;

export const CreateAccount = styled.TouchableOpacity`
  
`;

export const CreateAccountText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: #8257e5;
`;

export const Remmember = styled.View`
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RemmemberMe = styled.Text`
  color: #9c98a6;
  font-family: 'Poppins-Regular';
  font-size: 12px;
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: #9c98a6;
`;