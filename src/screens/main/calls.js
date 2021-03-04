/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image} from 'react-native';
import {Text, StyleSheet, View} from 'react-native';

import {COLORS, FONTS, SIZES, MARGINS} from '../../res/Themes';

import Icon from 'react-native-vector-icons/Ionicons';

export class calls extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.heading}>Calls</Text>
        </View>
        <View>
          <Text style={styles.titlesOne}>Missed call</Text>
          <View style={styles.callHolder}>
            <Image
              style={styles.image}
              source={require('../images/kells.jpg')}
            />
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignContent: 'center',
              }}>
              <View style={{padding: 10}}>
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    color: COLORS.accent,
                    fontSize: 16,
                  }}>
                  John Doe
                </Text>
                <View style={styles.callHolder}>
                  <Icon
                    size={25}
                    name="trending-down-outline"
                    color={COLORS.red}
                  />
                  <Icon
                    style={{marginLeft: 5}}
                    size={25}
                    name="time-outline"
                    color={COLORS.accent}
                  />
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      color: COLORS.accent,
                      fontSize: 16,
                      marginLeft: 5,
                    }}>
                    Today, 11:30AM
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.titlesTwo}>Other calls</Text>
          <View style={styles.callHolder}>
            <Image
              style={styles.image}
              source={require('../images/kells.jpg')}
            />
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignContent: 'center',
              }}>
              <View style={{padding: 10}}>
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    color: COLORS.accent,
                    fontSize: 16,
                  }}>
                  John Doe
                </Text>
                <View style={styles.callHolder}>
                  <Icon
                    size={25}
                    name="trending-up-outline"
                    color={COLORS.primaryColor}
                  />
                  <Icon
                    style={{marginLeft: 5}}
                    size={25}
                    name="time-outline"
                    color={COLORS.accent}
                  />
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      color: COLORS.accent,
                      fontSize: 16,
                      marginLeft: 5,
                    }}>
                    Today, 11:30AM
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: MARGINS.ml20,
    paddingRight: MARGINS.mr20,
    backgroundColor: MARGINS.white,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOffset: {height: 5},
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
    flexDirection: 'row',
  },
  heading: {
    color: COLORS.accent,
    fontFamily: FONTS.medium,
    fontSize: SIZES.h10,
  },
  callHolder: {
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 150 / 2,
  },
  titlesOne: {
    color: COLORS.red,
    fontFamily: FONTS.medium,
    fontSize: SIZES.h6,
    margin: MARGINS.m10,
  },
  titlesTwo: {
    color: COLORS.blue,
    fontFamily: FONTS.medium,
    fontSize: SIZES.h6,
    margin: MARGINS.m10,
  },
});

export default calls;
