import * as React from 'react';

import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, View } from '../components/Themed';

import ChatList from '../components/ChatList';

import ChatRooms from '../data/ChatRooms';

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ChatList chatRoom={ChatRooms[0]}/>
      </View>
    </SafeAreaView>
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
