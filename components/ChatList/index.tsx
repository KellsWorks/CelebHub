import React from 'react';

import { View, Text } from 'react-native';

import {ChatRoom} from '../../types';

export type ChatRoomProps = {
    chatRoom: ChatRoom;
}

const ChatList = (props: ChatRoomProps) =>{

    const {chatRoom} = props;

    return(
        <View>
            <Text>{chatRoom.lastMessage.content}</Text>
        </View>
    )
}

export default ChatList;