import * as React from 'react';

import { StyleSheet, FlatList } from 'react-native';

import { Text, View } from '../components/Themed';

import ChatList from '../components/ChatList';

import chatRooms from '../data/ChatRooms';

export default function TabOneScreen() {
  return (
      <View style={styles.container}>
        <Text style={styles.chatRoomText}>Chat rooms</Text>
        <FlatList 
        data={chatRooms} 
        renderItem={
          ({item}) => <ChatList chatRoom={item}/>
        }
        keyExtractor={(item) => item.id}
        style={{ width: '100%' }}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  chatRoomText: {
    fontFamily: 'Font-medium',
    fontSize: 22,
    margin: 10,
    color: 'gray',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
