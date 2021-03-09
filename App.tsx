import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import { Text, View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

const LoadFonts = () =>{
  return Font.loadAsync({
    'Font-normal': require('./assets/fonts/poppins_regular.ttf'),
    'Font-medium': require('./assets/fonts/poppins_medium.ttf'),
    'Font-bold': require('./assets/fonts/poppins_bold.ttf'),
  });
}

export default function App() {

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return(
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err: any) => console.error(err)}
      />
    );
  }

  if (!isLoadingComplete) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>CelebHub</Text>
            <LottieView
              autoPlay
              source={require('./assets/images/loadingAnimation.json')}
              style={{width: '20%'}}
            />
      </View>
    );
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
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
