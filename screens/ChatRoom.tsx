import React, { Component } from 'react'
import { ImageBackground, Text, View } from 'react-native'

const ChatRoom = () => {

    
    return(
        <ImageBackground source={require('../assets/images/BG.png')} style={{ width: '100%', height: '100%' }}>
            <Text>Chat room</Text>
        </ImageBackground>
    );
}

export default ChatRoom;
