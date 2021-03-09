import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { View } from '../components/Themed';
import Colors from '../constants/Colors';

import {Ionicons} from '@expo/vector-icons';

import ChatRoom from '../screens/ChatRoom';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator 
    screenOptions={{ 
      headerStyle: {
        backgroundColor: Colors.light.tint,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontSize: 25,
        fontWeight: '800',
        fontFamily: 'Font-bold',
      }
     }}
    >
      <Stack.Screen name="CelebHub" 
      component={BottomTabNavigator} 
      options={{ 
        
        headerRight: () => (
          <View style={{ width: 110, flexDirection: 'row', backgroundColor: Colors.light.tint, justifyContent: 'space-between', paddingRight: 10}}>
            <Ionicons name="people-outline"  size={25} color={Colors.light.background}/>
            <Ionicons name="search-outline"  size={25} color={Colors.light.background}/>
            <Ionicons name="ellipsis-horizontal-circle"  size={25} color={Colors.light.background}/>
          </View>
        )
       }}
      />
      <Stack.Screen name="ChatRoom" component={ChatRoom}
      options= {({route}) => ({
        title: route.params.name,
        headerStyle : {
          backgroundColor: Colors.light.tint,
        },
        headerRight: () => (
          <View style={{  width: 110, flexDirection: 'row', backgroundColor: Colors.light.tint, justifyContent: 'space-between', paddingRight: 10 }}>
            <Ionicons name="videocam" size={25} color={'white'}/>
            <Ionicons name="call" size={25} color={'white'}/>
            <Ionicons name="ellipsis-horizontal-circle" size={25} color={'white'}/>
          </View>
        )
      })}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
