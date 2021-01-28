import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, StatusBar, Text } from 'react-native';

import backIcon from '../../assets/arrow-left.png';
import logoIcon from '../../assets/logo.png'

import { 
  Container,
  Content,
  BackButton,
  Title,
  Logo
} from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  const handleNavigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor='#774dd6' />

      <Content>
        <BackButton onPress={handleNavigateBack}>
          <Image style={{ tintColor: '#d4c2ff' }} source={backIcon} />
        </BackButton>
        <Title>{title}</Title>
        <Logo resizeMode='contain' source={logoIcon} />
      </Content>
    </Container>
  );
}

export default Header;