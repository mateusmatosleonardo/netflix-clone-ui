import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  BtnLogin,
  BtnStarted,
  Container,
  Content,
  Subtitle,
  Title,
  Touched,
} from './styles';
import {theme} from '../../styles/theme';
import TV from '../../assets/tv.png';

const Inital: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <LinearGradient
        colors={['#530407', '#880c12', '#3a1416']}
        style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={TV} style={{width: 244, height: 199}} />
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
            <BtnStarted
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Tabs')}>
              <Text style={styles.textBtn}>Começar</Text>
            </BtnStarted>
          </LinearGradient>
          <BtnLogin
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textBtn}>Login</Text>
          </BtnLogin>
          <View style={styles.containerFooter}>
            <Touched activeOpacity={0.6}>
              <Text style={styles.textFooter}>Privacy</Text>
            </Touched>
            <View style={styles.bar} />
            <Touched activeOpacity={0.6}>
              <Text style={styles.textFooter}>Help</Text>
            </Touched>
            <View style={styles.bar} />
            <Touched activeOpacity={0.6}>
              <Text style={styles.textFooter}>FAQs</Text>
            </Touched>
          </View>
        </Content>
      </LinearGradient>
    </Container>
  );
};

const styles = StyleSheet.create({
  textBtn: {
    fontFamily: theme.fonts.manrope,
    fontSize: 18,
    color: theme.colors.gray,
  },
  containerFooter: {
    width: '100%',
    marginVertical: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textFooter: {
    color: theme.colors.blue,
    fontFamily: 'Manrope-Regular',
  },
  bar: {
    height: 19,
    borderWidth: 0.5,
    borderColor: theme.colors.white,
  },
});

export default Inital;
