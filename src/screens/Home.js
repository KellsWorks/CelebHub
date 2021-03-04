/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chats from './main/Chats';
import camera from './main/camera';
import settings from './main/settings';
import calls from './main/calls';
import Icon from 'react-native-vector-icons/Ionicons';


const Home = ({}) => {

  const MainStack = createBottomTabNavigator();

  const tabBarOptions = {

    showLabel: false,
    style: {
      fontFamily: 'poppins_regular',
      paddingBottom: 12,
      paddingTop: 12,
    },

  };

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused}) => {

      let iconName = 'chatbubble-ellipses-outline';

      switch (route.name) {
        case 'Chats':
          iconName = 'chatbubble-ellipses-outline';
          break;
        case 'Calls':
          iconName = 'call-outline';
          break;
        case 'Camera':
          iconName = 'camera-outline';
          break;
        case 'Settings':
          iconName = 'settings-outline';
          break;
        default:
          iconName = 'chatbubble-ellipses-outline';
          break;
      }

      return <Icon name={iconName} size={30}  color={focused ? '#00bc48' : '#9c9fa2'}/>;
    },
  });

  return (
    <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
      <MainStack.Screen name="Chats" component={Chats}/>
      <MainStack.Screen name="Calls" component={calls}/>
      <MainStack.Screen name="Camera" component={camera}/>
      <MainStack.Screen name="Settings" component={settings}/>
    </MainStack.Navigator>
  );
};


export default Home;
