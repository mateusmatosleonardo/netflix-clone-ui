import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {theme} from '../../styles/theme';
import {Container, Header, Touched} from './styles';
import logoNT from '../../assets/icons/logoNt.png';
import arrowLeft from '../../assets/icons/arrow-left.png';

const Login = () => {
  return (
    <Container style={styles.container}>
      <Header>
        <Touched activeOpacity={0.7} style={styles.touched}>
          <Image source={arrowLeft} style={styles.arrow} />
        </Touched>
        <Image source={logoNT} style={{width: 105.6, height: 28.57}} />
        <Touched>
          <Text style={styles.textHelp}>Help</Text>
        </Touched>
      </Header>
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
});

export default Login;
