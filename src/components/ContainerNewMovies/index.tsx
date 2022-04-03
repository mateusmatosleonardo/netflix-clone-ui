import React from 'react';
import {
  BannerMovie,
  Container,
  Content,
  ContentEvaluation,
  Description,
  Evaluation,
  TitleFilm,
  TypeFilm,
} from './styles';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {theme} from '../../styles/theme';
import IconEvaluation from '../../assets/icons/evaluation.png';

interface ContainerNewMoviesProps {
  banner: any;
  title: string;
  type?: string;
  evaluation: string;
}

const ContainerNewMovies = ({
  banner,
  title,
  type,
  evaluation,
}: ContainerNewMoviesProps) => {
  return (
    <Container>
      <BannerMovie source={banner} />
      <Content>
        <TitleFilm style={styles.title}>{title}</TitleFilm>
        <Description>
          <TypeFilm style={styles.typeFilm}>
            {type === '' ? '...' : type}
          </TypeFilm>
          <ContentEvaluation>
            <Evaluation style={styles.evaluation}>{evaluation}</Evaluation>
            <Image source={IconEvaluation} style={styles.starEvaluation} />
          </ContentEvaluation>
        </Description>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            width: '100%',
            height: 28,
            backgroundColor: '#a5060e',
            borderRadius: 18,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: theme.fonts.manropeMedium,
              fontSize: 12,
              color: '#fafafa',
            }}>
            Watch Now
          </Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontFamily: theme.fonts.manropeMedium,
    flexBasis: '25%', // mudar isso aqui depois
  },
  typeFilm: {
    fontFamily: theme.fonts.manrope,
    fontWeight: '300',
    paddingVertical: 3,
    color: 'rgba(255, 255, 255, 0.46);',
  },
  evaluation: {
    fontSize: 10,
    fontFamily: theme.fonts.manrope,
    fontWeight: '300',
    marginRight: 4,
    color: 'rgba(255, 255, 255, 0.46);',
  },
  starEvaluation: {
    width: 10.13,
    height: 9.67,
  },
});

export default ContainerNewMovies;
