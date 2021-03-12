import { StatusBar } from 'expo-status-bar';

import React, {useEffect, useState} from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';

import useColorScheme from './hooks/useColorScheme';

import Navigation from './navigation';

import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';

import { AsyncStorage } from 'react-native'

import OnboardingScreen from './screens/OnboardingScreen';

import { createStackNavigator } from '@react-navigation/stack';

import MainTabNavigator from "./navigation/MainTabNavigator";
import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/Main';

const LoadFonts = () =>{
  return Font.loadAsync({
    'Font-normal': require('./assets/fonts/poppins_regular.ttf'),
    'Font-medium': require('./assets/fonts/poppins_medium.ttf'),
    'Font-bold': require('./assets/fonts/poppins_bold.ttf'),
  });
}

const AppStack = createStackNavigator();

export default function App(this: any) {

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [fontLoaded, setFontLoaded] = useState(false);

  const [isFirstLaunched, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched', 'true')
        setIsFirstLaunch(true)
      }else{
        setIsFirstLaunch(false)
      }
    })
  }, [])

  if(isFirstLaunched == null){
    return null
  }else if(isFirstLaunched == true){
    if(!fontLoaded){

      return(
        <AppLoading
          startAsync={LoadFonts}
          onFinish={() => setFontLoaded(true)}
          onError={(err: any) => console.error(err)}
        >
        </AppLoading>
      ); 
    }
    return (<><StatusBar style="light"/><OnboardingScreen/></>)
  }else{
    if (!isLoadingComplete) {
    
      return null;
  
    } else {
      if(!fontLoaded){

    return(
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err: any) => console.error(err)}
      >
      </AppLoading>
    ); 
  }
      return (
        <NavigationContainer>
          <SafeAreaProvider>
          <StatusBar style="light"/>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen component={OnboardingScreen} name="onboard"/>
            <AppStack.Screen component={Main} name="main"/>
          </AppStack.Navigator>
        </SafeAreaProvider>
        </NavigationContainer>
      );
    }
  }

}

