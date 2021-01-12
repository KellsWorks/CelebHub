/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const Page = ({ backgroundColor, iconName, title }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor,
      }}
    >
      <Icon name={iconName} type="feather" size={172} color="white" />
      <View style={{ marginTop: 16 }}>
        <Text style={ styles.text } >
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22, fontFamily: 'poppins_regular', color: 'white',
  }
});

export default Page;