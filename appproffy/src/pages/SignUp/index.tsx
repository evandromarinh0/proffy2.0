import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Image, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import backImg from '../../assets/arrow-left.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { 
  Container,
  BackButton,
  Title,
} from './styles';
import getValidationErrors from '../../utils/ValidationError';

interface SignUpNameForm {
  firstName: string;
  lastName: string;
}

interface SignUpCredentialsForm {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const swiperRef = useRef<any>(null);
  const formIdRef = useRef<FormHandles>(null);
  const formCredentialsRef = useRef<FormHandles>(null);

  const handleNavigateToSignIn = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSignUpFullName = useCallback(async (data: SignUpNameForm) => {
    try {
      formIdRef.current?.setErrors({})

      const schema = Yup.object().shape({
        firstName: Yup.string().required('Nome obrigatório'),
        lastName: Yup.string().required('Sobrenome obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // the request to api should be done here, example:

      // await api.post('users', data);

      swiperRef.current.scrollBy(1);

    } catch (err) {
      if(err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formIdRef.current?.setErrors(errors);

        return;
      }
    }
  }, []);

  const handleSwipeNext = useCallback(() => {
    formIdRef.current?.submitForm();
  }, []);

  const handleSignUpCredentials = useCallback(async (data: SignUpCredentialsForm) => {
    try {
      formCredentialsRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string().required('Campo obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Campo obrigatório')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // the request to api should be also done here, example:

      // await api.post('users', data);

      Alert.alert(
        'Cadastro realizado com sucesso',
        'Seu cadastro foi realizado, você já pode fazer o seu login'
      )

      navigation.navigate('SignIn');
    } catch (err) {
      if(err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formCredentialsRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro no cadastro',
        'Ocorreu um erro ao fazer cadastro, tente novamente'
      )
    }
  }, [navigation]);

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
                name="firstName" 
                autoCorrect={true}
                autoCapitalize="words"
                placeholder="Nome" 
              />
              <Input 
                name="lastName" 
                autoCorrect={true}
                autoCapitalize="words"
                placeholder="Sobrenome" 
              />
              <Button custom onPress={handleSwipeNext}>Próximo</Button>
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