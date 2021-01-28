/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ececec',
  },
  text: {
    fontSize: 20,
    color: '#29B6F6',
  },
});

export default Home;