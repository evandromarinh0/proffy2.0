import React, { useCallback, useState } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

import logoImg from '../../assets/logo.png';
import backgroundImg from '../../assets/sign-in-background.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { 
  Container,
  Upper,
  Background,
  Logo,
  Description,
  Lower,
  Login,
  Title,
  CreateAccount,
  CreateAccountText,
  Remmember,
  LeftSide,
  RemmemberMe,
  ForgotPassword,
  ForgotPasswordText
} from './styles';

const SignIn: React.FC = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleToggleCheckBox = useCallback(() => {
    setToggleCheckBox(!toggleCheckBox);
  }, [toggleCheckBox])

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#8257E5' />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
        <ScrollView contentContainerStyle={{ flex:1 }} keyboardShouldPersistTaps="handled" >
          <Container>
            <Upper>
              <Background source={backgroundImg} resizeMode="contain">
                <Logo source={logoImg} />
                <View>
                  <Description>Sua plataforma de estudos online.</Description>
                </View>
              </Background>
            </Upper>

            <Lower>
              <Login>
                <Title>Fazer login</Title>
                <CreateAccount onPress={() => {}}>
                  <CreateAccountText>Criar uma conta</CreateAccountText>
                </CreateAccount>
              </Login>

              <Input name="email" placeholder="E-mail" />
              <Input name="password" placeholder="Senha" />

              <Remmember>
                <LeftSide>
                  <CheckBox 
                    disabled={false} 
                    value={toggleCheckBox} 
                    onValueChange={handleToggleCheckBox} 
                  />
                  <RemmemberMe>Lembrar-me</RemmemberMe>
                </LeftSide>

                <ForgotPassword onPress={() => {}}>
                  <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                </ForgotPassword>
              </Remmember>
                
              <Button onPress={() =>{}}>Entrar</Button>
            </Lower>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default SignIn;