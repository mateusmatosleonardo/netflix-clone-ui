import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, LogBox} from 'react-native';
import Home from './pages/Home/Home';

import IconHome from './assets/icons/home.png';
import Search from './assets/icons/search.png';
import Downloads from './assets/icons/downloads.png';
import User from './assets/icons/user.png';
import Linear from './pages/Linear';
import Inital from './pages/Initial';
import Login from './pages/Login';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // reseting border!
          width: '100%',
          maxWidth: 352,
          borderTopWidth: 0,
          height: 56,
          position: 'absolute',
          left: 30,
          right: 5,
          bottom: 18,
          borderRadius: 21,
          elevation: 12,
          backgroundColor: 'rgba(0, 0, 0, 0.49)',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={IconHome}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#FF0000' : '#CFCFCF',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Linear}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={Search}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#FF0000' : '#CFCFCF',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={Downloads}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#FF0000' : '#CFCFCF',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={User}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#FF0000' : '#CFCFCF',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Initial"
          component={Inital}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
