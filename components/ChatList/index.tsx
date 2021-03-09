import React from 'react';

import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';

import {ChatRoom} from '../../types';

import styles from './styles';

import moment from 'moment';

import { useNavigation } from '@react-navigation/native';

export type ChatRoomProps = {
    chatRoom: ChatRoom;
}

const ChatList = (props: ChatRoomProps) =>{

    const {chatRoom} = props;

    const user = chatRoom.users[1]; 

    const navigation = useNavigation();

    const click = () =>{
        navigation.navigate('ChatRoom', {
            name: user.name
        });
    }

    return(
        <TouchableWithoutFeedback onPress={click}>
            <View  style={styles.container}>
            <View style={styles.leftContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.avatar}/>
            
            <View>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
            
            </View>
            
            </View>
            <View><Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/Y")}</Text></View>
        
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ChatList;