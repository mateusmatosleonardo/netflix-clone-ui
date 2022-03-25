import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, View, Text} from 'react-native';
import {
  BtnLogin,
  BtnStarted,
  Container,
  Content,
  Subtitle,
  Title,
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <LinearGradient
        colors={['#530407', '#880c12', '#3a1416']}
        style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/tv.png')}
          style={{width: 244, height: 199}}
        />
      </LinearGradient>
      <LinearGradient
        colors={['#3a1416', '#130a0b', '#080303']}
        style={{flex: 5}}>
        <Content>
          <Title>assista a qualquer filme do seu telefone na TV</Title>
          <Subtitle>assista todos os seus filmes na TV</Subtitle>
          <LinearGradient
            colors={['#aa040c', '#aa040c', '#a04e4e']}
            style={{
              width: '100%',
              height: 46,
              borderRadius: 23,
              elevation: 10,
            }}>
            <BtnStarted>
              <Text style={{color: '#cccaca', fontSize: 18}}>Começar</Text>
            </BtnStarted>
          </LinearGradient>
          {/* <BtnLogin>
            <Text>Login</Text>
          </BtnLogin> */}
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default Login;
