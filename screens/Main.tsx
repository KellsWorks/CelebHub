import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react'
import { ImageBackground,Image, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import window from '../constants/Layout';
import MainTabNavigator from '../navigation/MainTabNavigator';

const Main = () => {
    return(
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/images/appbar.png')} style={{ width: window.window.width, height: 150, flexDirection: 'row', paddingTop: 50, paddingLeft: 10, paddingRight: 10 }}>
            <Image source={require('../assets/images/kells.jpg')} style={{ width: 80, height: 80, borderRadius: 80 / 2, borderColor: 'white', borderWidth: 3}}/>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row', paddingLeft: 10, paddingRight: 10 }}>
                <View>
                <Text style={{ fontFamily: 'Font-medium', color: 'white', fontSize: 18 }}>Ellanive Chiwaya</Text>
                <Text style={{ fontFamily: 'Font-normal', color: 'white'}}>Online</Text>
                <View style={{ flexDirection: 'row', padding: 7, backgroundColor: 'white', borderRadius: 20 }}>
                    <View style={{ backgroundColor: '#00a7ff', height: 10, width: 10, borderRadius: 30, marginTop: 6, marginRight: 5 }}></View>
                    <Text style={{ fontFamily: 'Font-medium', color: 'gray'}}>23 Celeb Rooms </Text>
                </View>
                </View>
                <View style={{ width: 110, flexDirection: 'row', justifyContent: 'space-around', marginLeft: 30}}>
                <Ionicons name="people"  size={25} color='white'/>
                <Ionicons name="search"  size={25} color='white'/>
                <Ionicons name="ellipsis-horizontal-circle"  size={25} color='white'/>
          </View>
            </View>
            </ImageBackground>
            <View style={{ flex: 1 }}>
            <MainTabNavigator/>
            </View>
        </View>
    )
}

export default Main;
