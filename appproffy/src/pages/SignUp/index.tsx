import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import backImg from '../../assets/arrow-left.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { 
  Container,
  BackButton,
  Title,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const swiperRef = useRef<any>(null);
  const formIdRef = useRef<FormHandles>(null);
  const formCredentialsRef = useRef<FormHandles>(null);

  const handleNavigateToSignIn = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSignUpFullName = useCallback((data: object) => {
    console.log(data);
  }, []);

  const handleSwipeNext = useCallback(() => {
    formIdRef.current?.submitForm();

    swiperRef.current.scrollBy(1);
  }, []);

  const handleSignUpCredentials = useCallback((data: object) => {
    console.log(data)
  }, []);

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#E6E6F0' />

      <BackButton onPress={handleNavigateToSignIn}>
        <Image source={backImg} />
      </BackButton>
      
      <Swiper 
        ref={swiperRef}
        loop={false}
      >
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
          <Container>
            <Title>01. Quem é você?</Title>
            <Form ref={formIdRef} onSubmit={handleSignUpFullName}>
              <Input 
                name="first-name" 
                autoCorrect={true}
                autoCapitalize="words"
                placeholder="Nome" 
              />
              <Input 
                name="last-name" 
                autoCorrect={true}
                autoCapitalize="words"
                placeholder="Sobrenome" 
              />
              <Button color onPress={handleSwipeNext}>Próximo</Button>
            </Form>
          </Container>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
          <Container>
            <Title>02. Email e Senha</Title>
            <Form ref={formCredentialsRef} onSubmit={handleSignUpCredentials}>
              <Input 
                name="email" 
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="E-mail" 
              />
              <Input 
                name="password" 
                returnKeyType="send"
                secureTextEntry
                textContentType="newPassword"
                placeholder="Senha" 
                onSubmitEditing={() => formCredentialsRef.current?.submitForm()}
              />
              <Button onPress={() => formCredentialsRef.current?.submitForm()}>Concluir cadastro</Button>
            </Form>
          </Container>
        </KeyboardAvoidingView>
      </Swiper>
    </>
  );
}

export default SignUp;