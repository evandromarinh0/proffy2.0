import React, { useCallback, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

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
  const [toggleCheckBox, setToggleCheckBox] = useState(true);
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleToggleCheckBox = useCallback(() => {
    setToggleCheckBox(!toggleCheckBox);
  }, [toggleCheckBox]);

  const handleNavigateToCreateAccount = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  const handleNavigateToForgotPassword = useCallback(() => {
    navigation.navigate('ForgotPassword');
  }, [navigation]);

  const handleSignIn = useCallback((data: object) => {
    console.log(data)
  }, []);

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
                <CreateAccount onPress={handleNavigateToCreateAccount}>
                  <CreateAccountText>Criar uma conta</CreateAccountText>
                </CreateAccount>
              </Login>

              <Form ref={formRef} onSubmit={handleSignIn}>
                <Input 
                  name="email" 
                  autoCorrect={false} 
                  autoCapitalize="none"
                  keyboardType="email-address" 
                  placeholder="E-mail" 
                />
                <Input 
                  name="password" 
                  secureTextEntry
                  returnKeyType="send"
                  placeholder="Senha" 
                  onSubmitEditing={() => formRef.current?.submitForm()}
                />
                <Remmember>
                  <LeftSide>
                    <CheckBox 
                      disabled={false} 
                      value={toggleCheckBox} 
                      onValueChange={handleToggleCheckBox}
                      tintColors={{true: '#04d361'}}
                    />
                    <RemmemberMe>Lembrar-me</RemmemberMe>
                  </LeftSide>

                  <ForgotPassword onPress={handleNavigateToForgotPassword}>
                    <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                  </ForgotPassword>
                </Remmember>
                <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
              </Form>
            </Lower>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default SignIn;