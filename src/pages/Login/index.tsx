import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../../styles/theme';
import {Container} from './styles';

const Login = () => {
  return (
    <Container style={styles.container}>
      <Text>Login</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 10,
    backgroundColor: theme.colors.blackLight,
  },
});

export default Login;
