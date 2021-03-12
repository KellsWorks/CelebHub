import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React, { Component } from 'react'
import { Text, View, Image, Button, TouchableOpacity } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import useColorScheme from '../hooks/useColorScheme'
import Navigation from '../navigation/index'

const OnboardingScreen = () => {

    const navigation  = useNavigation();

    const colorScheme = useColorScheme();
    
        const Done = ({...props}) => (
            <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
                <Text style={{ fontFamily: 'Font-medium', color: 'white' }}>Done</Text>
            </TouchableOpacity>
        );

        const Skip = () => (
            <TouchableOpacity style={{ marginHorizontal: 10 }}>
                <Text style={{ fontFamily: 'Font-medium', color: 'white' }}>Skip</Text>
            </TouchableOpacity>
        );
        
        return (
            <Onboarding
            SkipButtonComponent={Skip}
            nextLabel={<AntDesign name="right" size={25}/>}
            DoneButtonComponent={Done}
            onDone={() => navigation.navigate("main")}
            pages={[
                {
                    backgroundColor: '#01906d',
                    image: <Image source={require("../assets/images/ChatConnect.png")} style={{ height: 250, width: 250}}/>,
                    title: 'Connect with celebrities',
                    subtitle: 'Interact with Malawian celebrities',
                    titleStyles: {fontFamily: 'Font-bold', fontSize: 25},
                    subTitleStyles: {fontFamily: 'Font-medium', fontSize: 17},
                },
                {
                    backgroundColor: '#903701',
                    image: <Image source={require("../assets/images/GroupChat.png")} style={{ height: 250, width: 350}}/>,
                    title: 'Quick links',
                    subtitle: 'Latest links to new social stories, music and others',
                    titleStyles: {fontFamily: 'Font-bold', fontSize: 25},
                    subTitleStyles: {fontFamily: 'Font-medium', fontSize: 17},
                },
                {
                    backgroundColor: '#015290',
                    image: <Image source={require("../assets/images/ChatMaintenance.png")} style={{ height: 250, width: 250}}/>,
                    title: 'Build your lifestyle',
                    subtitle: 'Manage your lifestyle through social interaction',
                    titleStyles: {fontFamily: 'Font-bold', fontSize: 25},
                    subTitleStyles: {fontFamily: 'Font-medium', fontSize: 17},
                }
            ]}
            ></Onboarding>
        )
    }

export default OnboardingScreen
