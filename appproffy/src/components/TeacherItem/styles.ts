import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const ProfileSection = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 32px 24px 16px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const Profile = styled.View`
  margin-left: 16px;
`;

export const Username = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: 20px;
  color: #32264d;
`;

export const Subject = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: #6a6180;
`;

export const Bio = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #6a6180;
  padding: 0 24px 24px;

  border-bottom-width: 1px;
  border-bottom-color: #e6e6f0;
`;

export const ScheduleDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 32px 42px 0;
`;

export const WorkingDay = styled.Text`
  color: #9c98a6;
  font-size: 10px;
  font-family: 'Poppins-Regular';
`;

export const WorkingHour = styled.Text`
  color: #9c98a6;
  font-size: 10px;
  font-family: 'Poppins-Regular';
`;

export const WorkingInformations = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  border-width: 1px;
  border-color: #e6e6f0;
  background: #fafafc;
  margin: 8px 24px;
  border-radius: 10px;
`;

export const WeekDay = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: 16px;
  color: #6a6180;
`;

export const AvailableAt = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: 16px;
  color: #6a6180;
`;

export const GetInTouch = styled.View`
  border-top-width: 1px;
  border-top-color: #e6e6f0;
  padding: 32px 24px 16px;
  margin-top: 24px;
  background: #fafafc;
  border-radius: 10px;
`;

export const ClassesPrice = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
  justify-content: space-between;
  align-items: center;
`;

export const HourPrice = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #6a6180;
`;

export const AskedPrice = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: 16px;
  color: #8257e5;
`;

export const WhatsappButton = styled(RectButton)`
  background: #04d361;
  height: 56px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const WhatsappIcon = styled.Image``;

export const WhatsappButtonText = styled.Text`
  font-family: 'Archivo-SemiBold';
  font-size: 16px;
  color: #fff;
  margin-left: 8px;
`;
