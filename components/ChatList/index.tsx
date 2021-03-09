import React from 'react';

import { View, Image, Text } from 'react-native';

import {ChatRoom} from '../../types';

import styles from './styles';

export type ChatRoomProps = {
    chatRoom: ChatRoom;
}

const ChatList = (props: ChatRoomProps) =>{

    const {chatRoom} = props;

    const user = chatRoom.users[1]; 

    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.avatar}/>
            
            <View>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
            
            </View>
            
            </View>
            <View><Text style={styles.time}>Today</Text></View>
        </View>
    )
}

export default ChatList;