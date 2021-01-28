import React, { useCallback, useRef } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, StatusBar, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/ValidationError';

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
  const navigation = useNavigation();

  const handleNavigateGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSendEmailVerification = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string().required('Campo obrigatório').email('Digite um e-mail válido'),
      });
      
      await schema.validate(data, {
        abortEarly: false,
      });

      // it should send the post request here

      Alert.alert(
        'E-mail de recuperação enviado',
        'Verifique no seu e-mail para confirmar recuperação de senha'
      );

      navigation.navigate('SignIn');

    } catch (err) {
      if(err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro na recuperação',
        'Ocorreu um erro ao tentar enviar e-mail de recuperação, tente novamente'
      );
    }
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