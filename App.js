import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from './src/screens/onboarding';
import Home from './src/screens/Home';
import SignIn from './src/auth/SignIn';
import SignUp from './src/auth/SignUp';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native';

const AppStack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onboarding" component={Onboarding} />
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="SignIn" component={SignIn} />
          <AppStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerTitle: (props) => <LogoTitle {...props} />,
              headerLeft: () => <Button title="info" />,
            }}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}