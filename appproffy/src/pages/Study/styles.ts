import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 24px;
  margin-bottom: 32px;
`;

export const FilterButtonText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: #d4c2ff;
  margin-left: 16px;
`;

export const ToggleIcon = styled.Image``;
  
export const Pickers = styled.View`
  padding: 16px 24px;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  margin: 16px 0 8px;
`;

export const PickerBackground = styled.View`
  background: #fff;
  border-radius: 10px;
  padding: 0 0 0 8px;
`;

export const PickerGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const WeekDayPicker = styled.View`
  width: 58%;
`;

export const HourPicker = styled.View`
  width: 38%;
`;

export const TeacherItemContainer = styled.View`
  background: #e6e6f0;
  flex: 1;
  padding: 16px 0 0 0;
`