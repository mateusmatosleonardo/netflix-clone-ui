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
          <Title>Watch any films from your phone on TV</Title>
          <Subtitle>Watch your all films on TV</Subtitle>
          <LinearGradient
            colors={['#aa040c', '#aa040c', '#a04e4e']}
            style={{
              width: '100%',
              height: 46,
              borderRadius: 23,
              elevation: 10,
            }}>
            <BtnStarted activeOpacity={0.7}>
              <Text
                style={{
                  color: '#cccaca',
                  fontSize: 18,
                  fontFamily: 'Manrope-Regular',
                }}>
                Começar
              </Text>
            </BtnStarted>
          </LinearGradient>
          <BtnLogin activeOpacity={0.7}>
            <Text
              style={{
                color: '#cccaca',
                fontSize: 18,
                fontFamily: 'Manrope-Regular',
              }}>
              Login
            </Text>
          </BtnLogin>
          <View
            style={{
              width: '100%',
              marginVertical: 60,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontFamily: 'Manrope-Regular'}}>Privacy</Text>
            <View
              style={{height: 19, borderWidth: 0.5, borderColor: '#ffffff'}}
            />
            <Text style={{fontFamily: 'Manrope-Regular'}}>Help</Text>
            <View
              style={{height: 19, borderWidth: 0.5, borderColor: '#ffffff'}}
            />
            <Text style={{fontFamily: 'Manrope-Regular'}}>FAQs</Text>
          </View>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default Login;
