import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { Text, View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

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
