import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const UpperLanding = styled.View`
  flex: 1;
  background: #8257E5;
`;

export const ProfileSection = styled.View`
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 64px 32px 0;
`;

export const Profile = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #8275e5;
`;

export const Username = styled.Text`
  margin-left: 24px;
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: #d4c2ff;
`;

export const LogOutButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background: #774DD6;
`;

export const Background = styled.ImageBackground`
  margin: 20px 0;
  flex: 1;
`;

export const LowerLanding = styled.View`
  flex: 1;
  background: #E6E6F0;
  padding: 32px;
`;

export const RegularText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 20px;
  color: #6A6180;
`;

export const BoldText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 20px;
  color: #6A6180;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 24px;
`;

export const StudyButton = styled(RectButton)`
  height: 160px;
  width: 48%;
  background: #774DD6;
  border-radius: 10px;
  justify-content: space-between;
  padding: 24px;
`;

export const StudyButtonText = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: 20px;
  color: #fff;
`;

export const GiveClassesButton = styled(RectButton)`
  height: 160px;
  width: 48%;
  background: #04D361;
  border-radius: 10px;
  justify-content: space-between;
  padding: 24px;
`;

export const GiveClassesButtonText = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: 20px;
  color: #fff;
`;

export const TotalConnections = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 13px;
  color: #9C98A6;
`;