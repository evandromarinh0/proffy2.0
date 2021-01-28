import React from 'react';
import { Image } from 'react-native';

import longArrowRight from '../../assets/long-arrow-right.png';
import whatsappIcon from '../../assets/whatsapp.png';

import { 
  Container,
  ProfileSection,
  Avatar,
  Profile,
  Username,
  Subject,
  Bio,
  ScheduleDetails,
  WorkingDay,
  WorkingHour,
  WorkingInformations,
  WeekDay,
  AvailableAt,
  GetInTouch,
  ClassesPrice,
  HourPrice,
  AskedPrice,
  WhatsappButton,
  WhatsappIcon,
  WhatsappButtonText
} from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <ProfileSection>
        <Avatar source={{ uri: 'https://github.com/evandromarinh0.png' }} />
        <Profile>
          <Username>Evandro Marinho</Username>
          <Subject>Física</Subject>
        </Profile>
      </ProfileSection>
      <Bio>
        Para cada ação, existe uma reação. {'\n'}{'\n'}
        E = mc²
      </Bio>
      <ScheduleDetails>
        <WorkingDay>Dia</WorkingDay>
        <WorkingHour>Horário</WorkingHour>
      </ScheduleDetails>
      <WorkingInformations>
        <WeekDay>Segunda</WeekDay>
        <Image source={longArrowRight} />
        <AvailableAt>8h - 18h</AvailableAt>
      </WorkingInformations>

      <WorkingInformations>
        <WeekDay>Terça</WeekDay>
        <Image source={longArrowRight} />
        <AvailableAt>8h - 18h</AvailableAt>
      </WorkingInformations>

      <WorkingInformations>
        <WeekDay>Sexta</WeekDay>
        <Image source={longArrowRight} />
        <AvailableAt>8h - 18h</AvailableAt>
      </WorkingInformations>

      <GetInTouch>
        <ClassesPrice>
          <HourPrice>Preço da minha hora/aula:</HourPrice>
          <AskedPrice> R$ 25,00 reais</AskedPrice>
        </ClassesPrice>
        <WhatsappButton onPress={() => {}}>
          <WhatsappIcon source={whatsappIcon} />
          <WhatsappButtonText>Entrar em contato</WhatsappButtonText>
        </WhatsappButton>
      </GetInTouch>
    </Container>
  );
}

export default TeacherItem;