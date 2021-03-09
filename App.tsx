import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import { StyleSheet } from 'react-native'

import AnimatedSplash from "react-native-animated-splash-screen";

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

  if (!isLoadingComplete) {
    
    return null;
  } else {
    return (
      <AnimatedSplash
      translucent={true}
      isLoaded={this.state.isLoaded}
      logoImage={require("./assets/logo.png")}
      backgroundColor={"#262626"}
      logoHeight={150}
      logoWidth={150}
      >
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="light"/>
      </SafeAreaProvider>
    </AnimatedSplash>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6452A1',
  },
  text: {
    fontSize: 35,
    color: '#FFFFFF',
    },
});
