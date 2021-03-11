import React from 'react';
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import FloatingButton from '../components/FloatingButton/FloatingButton';

const CALLS = [
    {
      name: 'John Doe',
      avatar: require('../assets/images/kells.jpg'),
      icon: 'First Item',
      date: 'Today, 10:30AM',
      type: 'videocam',
    },
  ];

const Calls = () => {
    return(
        <View style={{ flex: 1, alignItems: 'center' }}>
            {/* <Text style={styles.missedText}>Missed calls</Text>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../assets/images/kells.jpg')} style={{marginLeft: 10, borderWidth: 6, borderRadius: 80, height: 80, width: 80 }}/>
                <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignContent: 'center',
              }}>
              <View style={{padding: 10}}>
                <Text
                  style={{
                    fontFamily: 'Font-medium',
                    color: 'gray',
                    fontSize: 16,
                  }}>
                  John Doe
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons
                    size={25}
                    name="trending-down-outline"
                    color='red'
                  />
                  <Ionicons
                    style={{marginLeft: 5}}
                    size={25}
                    name="time-outline"
                    color='red'
                  />
                  <Text
                    style={{
                      fontFamily: 'Font-medium',
                      color: 'gray',
                      fontSize: 16,
                      marginLeft: 5,
                    }}>
                    Today, 11:30AM
                  </Text>
                </View>
                
              </View>
              <ImageBackground
                style={{
                  height: 60,
                  width: 60,
                  marginLeft: 30,
                  alignContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  justifyContent: 'center',
                }}
                source={require('../assets/images/ellipse_primary.png')}>
                <Ionicons name="call" size={25} color={Colors.light.tint} />
              </ImageBackground>
            </View>
        </View>
        <Text style={styles.othersText}>Other calls</Text>
        <View>
        <View style={{ flexDirection: 'row' }}>
                <Image source={require('../assets/images/kells.jpg')} style={{marginLeft: 10, borderWidth: 6, borderRadius: 80, height: 80, width: 80 }}/>
                <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignContent: 'center',
              }}>
              <View style={{padding: 10}}>
                <Text
                  style={{
                    fontFamily: 'Font-medium',
                    color: 'gray',
                    fontSize: 16,
                  }}>
                  John Doe
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons
                    size={25}
                    name="trending-down-outline"
                    color='red'
                  />
                  <Ionicons
                    style={{marginLeft: 5}}
                    size={25}
                    name="time-outline"
                    color='red'
                  />
                  <Text
                    style={{
                      fontFamily: 'Font-medium',
                      color: 'gray',
                      fontSize: 16,
                      marginLeft: 5,
                    }}>
                    Today, 11:30AM
                  </Text>
                </View>
              </View>
              <ImageBackground
                style={{
                  height: 60,
                  width: 60,
                  marginLeft: 30,
                  alignContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'flex-end',
                  justifyContent: 'center',
                }}
                source={require('../assets/images/ellipse_primary.png')}>
                <Ionicons name="videocam" size={25} color={Colors.light.tint} />
              </ImageBackground>
            </View>
        </View>
        </View> */}

        <FloatingButton style={{bottom: 100,  right: 60}}/>
        </View>
    );
}

export default Calls;

const styles = StyleSheet.create({
    missedText : {
        fontSize: 18,
        fontFamily: 'Font-medium',
        margin: 10,
        color: 'red',
    },
    othersText : {
        fontSize: 18,
        fontFamily: 'Font-medium',
        margin: 10,
        color: '#64a3f6',
    },
});