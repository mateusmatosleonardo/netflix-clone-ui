import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TitleSection from '../../components/TitleSection';
import {
  Banner,
  ContainerSlider,
  Header,
  Menu,
  Notifications,
  NumberNotifications,
} from './styles';
import Star from '../../assets/icons/icon-stars.png';
import Ticket from '../../assets/icons/ticket.png';
import NewMovies from '../../assets/icons/icon-new-movies.png';
import CardGenres from '../../components/CardGenres';

const Home: React.FC = () => {
  const data = [
    {
      icon: require('../../assets/iconsGenres/Action.png'),
      title: 'Action',
    },
    {
      icon: require('../../assets/iconsGenres/Comedy.png'),
      title: 'Comedy',
    },
    {
      icon: require('../../assets/iconsGenres/Romance.png'),
      title: 'Romance',
    },
    {
      icon: require('../../assets/iconsGenres/Sad.png'),
      title: 'Sad',
    },
    {
      icon: require('../../assets/iconsGenres/Horror.png'),
      title: 'Horror',
    },
    {
      icon: require('../../assets/iconsGenres/Sports.png'),
      title: 'Sports',
    },
  ];

  return (
    <LinearGradient
      style={styles.gradient}
      colors={[
        '#1b0408',
        '#300204',
        '#0f0404f1',
        '#0f0404f1',
        '#0f0404f1',
        '#0f0404f1',
      ]}>
      <ScrollView style={styles.scrollMain}>
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
        <TitleSection
          styleContainer={{paddingTop: 20, paddingBottom: 18}}
          icon={Star}
          styleIcon={{width: 18, height: 18}}
          title="Top View"
        />
        <ContainerSlider>
          <Banner
            source={require('../../assets/images/banner-home.png')}
            resizeMode="cover"
            // style={{backgroundColor: '#fff'}}
          />
        </ContainerSlider>
        <TitleSection
          styleContainer={{paddingTop: 9, paddingBottom: 12}}
          icon={Ticket}
          styleIcon={{width: 19, height: 19}}
          title="Top Categories"
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          overScrollMode="never"
          horizontal
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (
            <CardGenres icon={item.icon} title={item.title} />
          )}
        />
        <TitleSection
          styleContainer={{paddingTop: 15, paddingBottom: 10}}
          icon={NewMovies}
          styleIcon={{width: 19, height: 19}}
          title="New Movies"
        />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  scrollMain: {
    paddingHorizontal: 30,
    paddingTop: 10,
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
