import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';

import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Colors from '../constants/Colors';

import useColorScheme from '../hooks/useColorScheme';

import TabOneScreen from '../screens/Chats';


import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import Profile from '../screens/Profile';
import Calls from '../screens/Calls';

const MainTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].select,
      labelStyle: {
        fontFamily: 'Font-medium',
        textTransform: 'capitalize',
        fontSize: 18,
      },
      }}>
      <MainTab.Screen
        name="Chats"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="chatbubble-ellipses-outline" color={color} size={25} />,
          tabBarLabel: () => null,
        }}
      />
      <MainTab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="call-outline" color={color} size={25} />,
          tabBarLabel: () => null,
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" color={color} size={25} />,
          tabBarLabel: () => null,
        }}
      />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerShown: false  }}
      />
    </TabOneStack.Navigator>
  );
}


const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}
