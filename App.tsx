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

const LoadFonts = () =>{
  return Font.loadAsync({
    'Font-normal': require('./assets/fonts/poppins_regular.ttf'),
    'Font-medium': require('./assets/fonts/poppins_medium.ttf'),
    'Font-bold': require('./assets/fonts/poppins_bold.ttf'),
  });
}

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
    return (<OnboardingScreen/>)
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
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar style="light"/>
        </SafeAreaProvider>
      );
    }
  }

}

