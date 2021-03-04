import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Profile </Text>
            </View>
        )
    }
}

export default Profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginTop: 40,
      backgroundColor: '#ececec',
    },
    text: {
      fontSize: 30,
      color: '#6452A1',
      fontFamily: 'poppins_bold',
      margin: 20,
      flex: 2,
    },
  });
