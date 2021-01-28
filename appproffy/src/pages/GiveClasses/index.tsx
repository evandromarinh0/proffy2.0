import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { Image } from 'react-native';

import warningIcon from '../../assets/warning.png';

import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { 
  Container,
  FormWrapper,
  Title,
  ProfileSection,
  Avatar,
  Profile,
  Username,
  Subject,
  Label,
  PickerBackground,
  Schedule,
  ScheduleTitle,
  PlusButton,
  PlusButtonText,
  ClassesHour,
  FromHour,
  ToHour,
  FinishButtonContainer,
  WarningContainer,
  WarningMessage,
  WarningMessageText,
  WarningMessageInstruction
} from './styles';

const GiveClasses: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [selectedDay, setSelectedDay] = useState("1");
  const [fromHour, setFromHour] = useState('');
  const [toHour, setToHour] = useState('');

  const handleSubmit = useCallback((data: object) => {
    console.log(data);

    // IT SHOULD DO THE POST REQUEST HERE

    // NAVIGATE TO SUCCESS PAGE
  }, []);

  const addNewScheduleItem = useCallback(() => {
    // IT SHOULD ADD NEW SCHEDULE ITEM
  }, []);

  return (
    <Container>
      <Header title='Dar aulas' />
      <PageHeader 
        title='Que incrível que você quer dar aulas.' 
        instruction='O primeiro passo, é preencher esse formulário de inscrição'
      >
        <ScrollView contentContainerStyle={{ padding: 16, backgroundColor: '#E6E6F0' }}>
          <FormWrapper>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Title>Seus dados</Title>

              <ProfileSection>
                <Avatar source={{ uri: 'https://github.com/evandromarinh0.png' }} />
                <Profile>
                  <Username>Evandro Marinho</Username>
                  <Subject>Física</Subject>
                </Profile>
              </ProfileSection>

              <Label>Whatsapp</Label>
              <Input 
                name='whatsapp'
                keyboardType='numeric'
              />

              <Label>Biografia</Label>
              <Input  
                name='bio'
                autoCorrect={true}
                keyboardType='default'
                multiline
              />

              <Title>Sobre a aula</Title>

              <Label>Matéria</Label>
              <Input 
                name='subject' 
                autoCorrect={true}
              />

              <Label>Custo da sua hora/aula</Label>
              <Input 
                name='cost' 
                keyboardType='decimal-pad'
              />

              <Schedule>
                <ScheduleTitle>Horários disponíveis</ScheduleTitle>
                <PlusButton onPress={addNewScheduleItem}>
                  <PlusButtonText>+ Novo</PlusButtonText>
                </PlusButton>
              </Schedule>

              <Label>Dia da semana</Label>
              <PickerBackground>
                <Picker
                  selectedValue={selectedDay}
                  style={{ height: 56, flex: 1, color: '#6A6180', borderWidth: 1, borderColor: '#e6e6f0' }}
                  onValueChange={(itemValue: any, itemIndex) => setSelectedDay(itemValue)}
                >
                  <Picker.Item label="Domingo" value="0" />
                  <Picker.Item label="Segunda-feira" value="1" />
                  <Picker.Item label="Terça-feira" value="2" />
                  <Picker.Item label="Quarta-feira" value="3" />
                  <Picker.Item label="Quinta-feira" value="4" />
                  <Picker.Item label="Sexta-feira" value="5" />
                  <Picker.Item label="Sábado" value="6" />
                </Picker>
              </PickerBackground>

              <ClassesHour>
                <FromHour>
                  <Label>Das</Label>
                  <PickerBackground>
                    <Picker
                      selectedValue={fromHour}
                      style={{ height: 56, flex: 1, color: '#6A6180', borderWidth: 1, borderColor: '#e6e6f0' }}
                      onValueChange={(itemValue: any, itemIndex) => setFromHour(itemValue)}
                    >
                      <Picker.Item label="7 horas" value="07:00" />
                      <Picker.Item label="8 horas" value="08:00" />
                      <Picker.Item label="9 horas" value="09:00" />
                      <Picker.Item label="10 horas" value="10:00" />
                      <Picker.Item label="11 horas" value="11:00" />
                    </Picker>
                  </PickerBackground>
                </FromHour>

                <ToHour>
                  <Label>Até</Label>
                  <PickerBackground>
                    <Picker
                      selectedValue={toHour}
                      style={{ height: 56, flex: 1, color: '#6A6180', borderWidth: 1, borderColor: '#e6e6f0' }}
                      onValueChange={(itemValue: any, itemIndex) => setToHour(itemValue)}
                    >
                      <Picker.Item label="12 horas" value="12:00" />
                      <Picker.Item label="13 horas" value="13:00" />
                      <Picker.Item label="14 horas" value="14:00" />
                      <Picker.Item label="15 horas" value="15:00" />
                      <Picker.Item label="16 horas" value="16:00" />
                      <Picker.Item label="17 horas" value="17:00" />
                      <Picker.Item label="18 horas" value="18:00" />
                    </Picker>
                  </PickerBackground>
                </ToHour>
              </ClassesHour>

              <FinishButtonContainer>
                <Button onPress={() => formRef.current?.submitForm()}>Salvar cadastro</Button>
                <WarningContainer>
                  <Image source={warningIcon} />
                  <WarningMessage>
                    <WarningMessageText>Importante!</WarningMessageText>
                    <WarningMessageInstruction>Preencha todos os dados</WarningMessageInstruction>
                  </WarningMessage>
                </WarningContainer>
              </FinishButtonContainer>
            </Form>
          </FormWrapper>
        </ScrollView>
      </PageHeader>
    </Container>
  );
}

export default GiveClasses;