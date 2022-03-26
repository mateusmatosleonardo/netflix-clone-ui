import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {theme} from '../../styles/theme';
import {Container} from './styles';

interface CardGenresProps {
  icon: any;
  title: string;
}

const CardGenres = ({icon, title}: CardGenresProps) => {
  return (
    <Container activeOpacity={0.7}>
      <Image source={icon} style={{width: 21, height: 21}} />
      <Text style={styles.title}>{title}</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 10,
    fontFamily: theme.fonts.manrope,
    color: theme.colors.white,
  },
});

export default CardGenres;
