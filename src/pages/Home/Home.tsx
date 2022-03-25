import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Home: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#1b0408', '#300204', '#180407']}
        style={{flex: 5}}>
        <Text>Home</Text>
      </LinearGradient>
      <LinearGradient
        colors={['#180407', '#180407', '#180407']}
        style={{flex: 5}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
