import React, { useCallback, useRef } from 'react';
import { Image, KeyboardAvoidingView, Platform, StatusBar, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import logoImg from '../../assets/logo.png';
import backImg from '../../assets/arrow-left.png';
import backgroundImg from '../../assets/sign-in-background.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { 
  Container,
  Upper,
  Background,
  Logo,
  Description,
  Lower,
  BackButton,
  Title,
  LowerDescription
} from './styles';

const ForgotPassword: React.FC = () => {
  const { goBack } = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleNavigateGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSendEmailVerification = useCallback((data: object) => {
    console.log(data);
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
              <BackButton onPress={handleNavigateGoBack}>
                <Image source={backImg} />
              </BackButton>

              <Title>Esqueceu sua senha?</Title>
              <LowerDescription>Não esquenta,{'\n'}vamos dar um jeito nisso.</LowerDescription>
              <Form ref={formRef} onSubmit={handleSendEmailVerification}>
                <Input 
                  name="email"
                  autoCorrect={false} 
                  autoCapitalize="none"
                  returnKeyType="send"
                  keyboardType="email-address" 
                  placeholder="E-mail" 
                  onSubmitEditing={() => formRef.current?.submitForm()}
                />
                <Button onPress={() => formRef.current?.submitForm()}>Enviar</Button>
              </Form>
            </Lower>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default ForgotPassword;