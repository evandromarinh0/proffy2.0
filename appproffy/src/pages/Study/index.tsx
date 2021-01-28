import React, { useCallback, useState } from 'react';
import { Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';

import filterIcon from '../../assets/filter.png';
import closeFilterIcon from '../../assets/close-filter.png';
import openFilterIcon from '../../assets/open-filter.png';

import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';
import TeacherItem from '../../components/TeacherItem';

import { 
  Container,
  FilterButton,
  FilterButtonText,
  ToggleIcon,
  Pickers,
  Label,
  PickerBackground,
  PickerGroup,
  WeekDayPicker,
  HourPicker,
  TeacherItemContainer,
} from './styles';

const Study: React.FC = () => {
  const [subject, setSubject] = useState('Matemática');
  const [weekDay, setWeekDay] = useState('1');
  const [hour, setHour] = useState('0700');
  const [filterVisibility, setFilterVisibility] = useState(true);

  const handleFilterVisibility = useCallback(() => {
    setFilterVisibility(!filterVisibility);
  }, [filterVisibility]);

  const handleFiltersSubmit = useCallback(() => {
    // GET TEACHERS BY FILTERS HERE

    setFilterVisibility(false);
  }, []);

  return (
    <Container>
      <Header title="Estudar" />
      <PageHeader title="Proffys      Disponíveis">
        <FilterButton onPress={handleFilterVisibility}>
          <Image source={filterIcon} />
          <FilterButtonText>Filtrar por dia, hora e matéria   </FilterButtonText>
          <ToggleIcon source={filterVisibility ? closeFilterIcon : openFilterIcon } />
        </FilterButton>

        {filterVisibility && (
          <>
            <Pickers>
              <Label>Matéria</Label>
              <PickerBackground>
                <Picker 
                  style={{ color: '#6A6180'}}
                  selectedValue={subject}
                  onValueChange={(itemValue: any, itemIndex) => setSubject(itemValue)}
                >
                  <Picker.Item label="Matemática" value="Matemática" />
                  <Picker.Item label="Artes" value="Artes" />
                  <Picker.Item label="Ciências" value="Ciências" />
                  <Picker.Item label="Filosofia" value="Filosofia" />
                  <Picker.Item label="Física" value="Física" />
                  <Picker.Item label="Português" value="Português" />
                </Picker>
              </PickerBackground>

              <PickerGroup>
                <WeekDayPicker>
                  <Label>Dia da semana</Label>
                  <PickerBackground>
                    <Picker 
                      selectedValue={weekDay}
                      style={{ color: '#6A6180'}}
                      onValueChange={(itemValue: any, itemIndex) => setWeekDay(itemValue)}
                    >
                      <Picker.Item label="Domingo" value="0" />
                      <Picker.Item label="Segunda" value="1" />
                      <Picker.Item label="Terça" value="2" />
                      <Picker.Item label="Quarta" value="3" />
                      <Picker.Item label="Quinta" value="4" />
                      <Picker.Item label="Sexta" value="5" />
                      <Picker.Item label="Sábado" value="6" />
                    </Picker>
                  </PickerBackground>
                </WeekDayPicker>

                <HourPicker>
                  <Label>Hora</Label>
                  <PickerBackground>
                    <Picker 
                      selectedValue={hour}
                      style={{ color: '#6A6180'}}
                      onValueChange={(itemValue: any, itemIndex) => setHour(itemValue)}
                    >
                      <Picker.Item label="7 horas" value="0700" />
                      <Picker.Item label="8 horas" value="0800" />
                      <Picker.Item label="9 horas" value="0900" />
                      <Picker.Item label="10 horas" value="1000" />
                      <Picker.Item label="11 horas" value="1100" />
                      <Picker.Item label="12 horas" value="1200" />
                      <Picker.Item label="13 horas" value="1300" />
                      <Picker.Item label="14 horas" value="1400" />
                      <Picker.Item label="15 horas" value="1500" />
                      <Picker.Item label="16 horas" value="1600" />
                      <Picker.Item label="17 horas" value="1700" />
                      <Picker.Item label="18 horas" value="1800" />
                    </Picker>
                  </PickerBackground>
                </HourPicker>
              </PickerGroup>
              <Button onPress={handleFiltersSubmit}>Filtrar</Button>
            </Pickers>
          </>
        )}
        <TeacherItemContainer>
          <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 8 }}>
            {/* TEACHER ITEMS SHOULD BE MAPPED HERE FROM AN EXISTENT API */}
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
          </ScrollView>
        </TeacherItemContainer>
      </PageHeader>
    </Container>
  );
}

export default Study;