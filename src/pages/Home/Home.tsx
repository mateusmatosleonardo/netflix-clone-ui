import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
