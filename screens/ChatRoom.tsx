import React, { useState, useCallback, useEffect } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Bubble, GiftedChat, InputToolbar, MessageText, Send, Time } from 'react-native-gifted-chat';
import Colors from '../constants/Colors';
import {Feather} from '@expo/vector-icons';

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

  const renderBubble = (props) => {
      return(
          <Bubble 
          {...props}
          messageTextProps={{
            linkStyle: {
              right: { color: 'red' },
              left: { color: 'red' },
            },
          }}
          textStyle={{
              right: {
                  fontFamily: 'Font-medium'
              },
              left: {
                color: 'gray',
                fontFamily: 'Font-medium'
            }
          }}
          wrapperStyle={{ 
              right:{
                  backgroundColor: Colors.light.tint
              },
              left:{
                backgroundColor: Colors.light.background
            }
           }}
          />
      );
    
    
    }

    const renderTicks = () => {
        return(
            <View></View>
        );
    }

    const renderTime = (props) => {
        return (
          <Time
          {...props}
            timeTextStyle={{
              left: {
                color: 'grey',
                fontFamily: 'Font-medium',
              },
              right: {
                color: 'white',
                fontFamily: 'Font-medium',
              },
            }}
          />
        );
    };

    const customInputToolbar = props => {
        return (
          <InputToolbar
            {...props}
            containerStyle={{
              fontFamily: 'Font-normal'
            }}
          />
        );
      };
      

    function renderSend(props) {
        return (
          <Send {...props}>
            <View style={{ justifyContent: 'center', alignContent: 'center' }}>
              <Feather name="send" size={25} color="gray" style={{marginBottom: 9, marginRight: 7}}/>
            </View>
          </Send>
        );
      }


    return(
        <ImageBackground source={require('../assets/images/BG.png')} style={{ width: '100%', height: '100%' }}>
            <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{ _id: 1, name: 'Kells Kamuzu' }}
            renderBubble={renderBubble}
            renderSend={renderSend}
            textInputProps={{ fontFamily: 'Font-medium' }}
            showAvatarForEveryMessage={true}
            placeholder="Type your message here"
            // isTyping
            renderTime={renderTime}
            renderInputToolbar={customInputToolbar}
            />
        </ImageBackground>
    );
}

export default ChatRoom;
