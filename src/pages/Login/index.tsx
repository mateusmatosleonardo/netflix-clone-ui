import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, Text, View} from 'react-native';

const Login: React.FC = () => {
  return (
    <View style={{flex: 1}}>
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
        style={{flex: 5}}
      />
    </View>
  );
};

export default Login;
