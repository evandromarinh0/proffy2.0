import styled from 'styled-components/native';

export const Container = styled.View`
  background: #E6E6F0;
  flex: 1;
`;

export const FormWrapper = styled.View`
  justify-content: center;
  align-items: center;
  background: #fff;

  border-radius: 8px;
  padding: 8px 24px 24px;
`;

export const Title = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: 20px;
  color: #32264d;

  padding: 0 0 8px 0;
  margin-top: 32px;

  border-bottom-width: 2px;
  border-bottom-color: #e6e6f0;
`;

export const ProfileSection = styled.View`
  
  padding: 16px 0;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #ccc ;
  margin: 0 16px;
`;

export const Profile = styled.View`
  flex: 1;
`;

export const Username = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: 20px;
  color: #32264d;
`;

export const Subject = styled.Text`
  font-family: 'Poppins-400';
  font-size: 12px;
  color: #6a6180;
`;

export const Field = styled.View`
`;

export const Label = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: #9c98a6;
  margin: 24px 0 8px 0 ;
`;

export const PickerBackground = styled.View`
  background: #fff;
  border-width: 2px;
  border-color: #e6e6f0;
  height: 56px;
  border-radius: 10px;
`;

export const Schedule = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 32px 0 24px;
  padding-bottom: 16px;

  border-bottom-width: 2px;
  border-bottom-color: #e6e6f0;
`;

export const ScheduleTitle = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: 20px;
  color: #32264d;
`;

export const PlusButton = styled.TouchableOpacity``;

export const PlusButtonText = styled.Text`
  font-family: 'Archivo-SemiBold';
  font-size: 14px;
  color: #8257e5;
`;

export const ClassesHour = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const FromHour = styled.View`
  width: 48%;
`;

export const ToHour = styled.View`
  width: 48%;
`;

export const FinishButtonContainer = styled.View`
  border-top-width: 0.8px;
  border-top-color: #e6e6f0;
  padding: 0 16px;
`;

export const WarningContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  align-items: center;
`;

export const WarningMessage = styled.View`
  margin-left: 16px;
`;

export const WarningMessageText = styled.Text`
  color: #8257e5;
  font-family: 'Poppins-Regular';
  font-size: 12px;
`;

export const WarningMessageInstruction = styled.Text`
  color: #a0a0b2;
  font-size: 12px;
  font-family: 'Poppins-Regular';
  line-height: 20px;
`;
