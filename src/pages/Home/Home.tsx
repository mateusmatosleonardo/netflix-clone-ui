import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  AlignTopView,
  Banner,
  Container,
  ContainerSlider,
  ContainerTopView,
  Header,
  Menu,
  Notifications,
  NumberNotifications,
  Seeall,
  Stars,
  TextTopView,
  TitleTopView,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <LinearGradient
        colors={['#1b0408', '#300204', '#180407']}
        style={styles.sizeGradiente}>
        <Header>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconMenu}>
            <Menu source={require('../../assets/icons/menu.png')} />
          </TouchableOpacity>
          <Image
            source={require('../../assets/icons/logoNt.png')}
            style={{width: 105.6, height: 28.57}}
          />
          <View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.iconNotifications}>
              <Notifications
                source={require('../../assets/icons/bell.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <NumberNotifications>2</NumberNotifications>
          </View>
        </Header>
        <ContainerTopView>
          <AlignTopView>
            <Stars source={require('../../assets/icons/icon-stars.png')} />
            <TextTopView>Top View</TextTopView>
          </AlignTopView>
          <Seeall>See all</Seeall>
        </ContainerTopView>
        <ContainerSlider>
          <Banner
            source={require('../../assets/images/banner-home.png')}
            resizeMode="cover"
          />
        </ContainerSlider>
      </LinearGradient>
      <LinearGradient
        colors={['#180407', '#110305', '#110305']}
        style={styles.sizeGradiente}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  sizeGradiente: {
    flex: 5,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  iconMenu: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 9,
    paddingVertical: 9,
    borderRadius: 12,
  },
  iconNotifications: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 12,
  },
});

export default Home;
