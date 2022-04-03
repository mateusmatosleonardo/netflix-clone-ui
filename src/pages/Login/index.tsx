import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {theme} from '../../styles/theme';
import {
  BtnSignIn,
  Container,
  ContainerInput,
  Header,
  InputArea,
  RetrieverPasswordText,
  Touched,
} from './styles';
import logoNT from '../../assets/icons/logoNt.png';
import arrowLeft from '../../assets/icons/arrow-left.png';

const Login = () => {
  const navigation = useNavigation();

  return (
    <Container style={styles.container}>
      <Header>
        <Touched
          activeOpacity={0.7}
          style={styles.touched}
          onPress={() => navigation.goBack()}>
          <Image source={arrowLeft} style={styles.arrow} />
        </Touched>
        <Image source={logoNT} style={{width: 105.6, height: 28.57}} />
        <Touched activeOpacity={0.7}>
          <Text style={styles.textHelp}>Help</Text>
        </Touched>
      </Header>
      <ContainerInput>
        <InputArea style={styles.inputArea}>
          <TextInput
            placeholderTextColor={theme.colors.white}
            placeholder="E-mail"
            style={{
              fontSize: 14,
              paddingLeft: 8,
              fontFamily: theme.fonts.manrope,
            }}
          />
        </InputArea>
        <InputArea style={[styles.inputArea, {marginTop: 20}]}>
          <TextInput
            placeholderTextColor={theme.colors.white}
            placeholder="Senha"
            style={{
              fontSize: 14,
              paddingLeft: 8,
              fontFamily: theme.fonts.manrope,
            }}
          />
        </InputArea>
      </ContainerInput>
      <BtnSignIn
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Tabs')}>
        <Text style={styles.titleBtn}>Entrar</Text>
      </BtnSignIn>
      <View style={{width: '100%', alignItems: 'center', marginTop: 12}}>
        <Touched activeOpacity={0.7}>
          <RetrieverPasswordText style={styles.retrieverText}>
            Retriever password
          </RetrieverPasswordText>
        </Touched>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 10,
    backgroundColor: theme.colors.blackLight,
  },
  arrow: {
    width: 22,
    height: 22,
  },
  touched: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 9,
    paddingVertical: 9,
    borderRadius: 12,
  },
  textHelp: {
    color: theme.colors.white,
    fontFamily: theme.fonts.manrope,
  },
  inputArea: {
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    borderWidth: 0,
  },
  titleBtn: {
    fontFamily: theme.fonts.manropeMedium,
    color: theme.colors.white,
  },
  retrieverText: {
    fontFamily: theme.fonts.manropeMedium,
    color: theme.colors.white,
  },
});

export default Login;
