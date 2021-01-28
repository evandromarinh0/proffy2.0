import React, { useCallback, useContext } from 'react';
import { Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../hooks/AuthContext';

import logOutIcon from '../../assets/log-out.png';
import landingImg from '../../assets/landing.png';
import studyIcon from '../../assets/study.png';
import giveClassesIcon from '../../assets/give-classes.png';
import hearIcon from '../../assets/purple-heart.png';

import { 
  Container,
  UpperLanding,
  ProfileSection,
  Profile,
  Avatar,
  Username,
  LogOutButton,
  Background,
  LowerLanding,
  RegularText,
  BoldText,
  ButtonsContainer,
  StudyButton,
  StudyButtonText,
  GiveClassesButton,
  GiveClassesButtonText,
  TotalConnections
} from './styles';

const Landing: React.FC = () => {
  const { signOut } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleNavigateToProfile = useCallback(() => {
    //NAVIGATE TO PROFILE
  }, [navigation]);

  const handleNavigateToStudyPage = useCallback(() => {
    navigation.navigate('Study');
  }, [navigation]);

  const handleNavigateToGiveClassesPage = useCallback(() => {
    navigation.navigate('GiveClasses');
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#8257E5' />
      <Container>
        <UpperLanding>
            <ProfileSection>
              <Profile onPress={handleNavigateToProfile}>
                <Avatar source={{ uri: 'https://github.com/evandromarinh0.png' }} />
                <Username>Evandro Marinho</Username>
              </Profile>

              <LogOutButton onPress={signOut}>
                <Image source={logOutIcon} />
              </LogOutButton>
            </ProfileSection>
          <Background source={landingImg} resizeMode='contain' />
        </UpperLanding>

        <LowerLanding>
          <RegularText>Seja bem-vindo.</RegularText>
          <BoldText>O que deseja fazer?</BoldText>

          <ButtonsContainer>
            <StudyButton onPress={handleNavigateToStudyPage}>
              <Image source={studyIcon} />
              <StudyButtonText>Estudar</StudyButtonText>
            </StudyButton>

            <GiveClassesButton onPress={handleNavigateToGiveClassesPage}>
              <Image source={giveClassesIcon} />
              <GiveClassesButtonText>Dar aulas</GiveClassesButtonText>
            </GiveClassesButton>
          </ButtonsContainer>

          <TotalConnections>Total de 23 conexões{'\n'}já realizadas <Image source={hearIcon} /></TotalConnections>
        </LowerLanding>
      </Container>
    </>
  );
}

export default Landing;