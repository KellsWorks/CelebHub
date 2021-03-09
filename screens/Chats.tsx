import * as React from 'react';

import { StyleSheet, FlatList } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, View } from '../components/Themed';

import ChatList from '../components/ChatList';

import chatRooms from '../data/ChatRooms';

export default function TabOneScreen() {
  return (
      <View style={styles.container}>
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
  container: {
    flex: 1,
    alignItems: 'center',
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
