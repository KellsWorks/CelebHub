import React, { useState, useCallback, useEffect } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatRoom = () => {

    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

    return(
        <ImageBackground source={require('../assets/images/BG.png')} style={{ width: '100%', height: '100%' }}>
            <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            />
        </ImageBackground>
    );
}

export default ChatRoom;
