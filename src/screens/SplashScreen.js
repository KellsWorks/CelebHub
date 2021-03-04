import React, {useEffect, Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(async() => {
            navigation.navigate('Onboarding') 
        }, 1500);
    }, []) 
    
    return (
            <View style={styles.container}>
                <Text style={styles.text}>CelebHub</Text>
                <LottieView
                 autoPlay
                 source={require('../res/gif/loadingAnimation.json')}
                 style={{width: '20%'}}
                />
            </View>
        )
    
}

export default SplashScreen

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
      fontFamily: 'poppins_bold',
    },
  });
