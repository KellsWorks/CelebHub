import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Page from './components/Page';

const Home = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Page} />
        <Tab.Screen name="Settings" component={Page} />
      </Tab.Navigator>
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
