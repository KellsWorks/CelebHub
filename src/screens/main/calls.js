/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image} from 'react-native';
import {Text, StyleSheet, View} from 'react-native';

import {COLORS, FONTS, SIZES, MARGINS} from '../../res/Themes';

import { Divider } from 'react-native-elements';

import Icon from 'react-native-vector-icons/Ionicons';
import {ImageBackground} from 'react-native';

const CALLS = [
  {
    name: 'John Doe',
    avatar: require('../images/kells.jpg'),
    icon: 'First Item',
    date: 'Today, 10:30AM',
    type: 'videocam',
  },
];

const Item = ({name, icon, date, type}) => (
  <View style={styles.callHolder}>
    <Image style={styles.image} source={require('../images/kells.jpg')} />
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
          {{name}}
        </Text>
        <View style={styles.callHolder}>
          <Icon size={25} name="trending-down-outline" color={COLORS.red} />
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
      <ImageBackground
        style={{
          height: 60,
          width: 60,
          marginLeft: 50,
          alignContent: 'center',
          alignItems: 'center',
          resizeMode: 'cover',
          justifyContent: 'center',
        }}
        source={require('../images/ellipse.png')}>
        <Icon name={icon} size={25} color={COLORS.red} />
      </ImageBackground>
    </View>
  </View>
);

export class calls extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.heading}>Calls</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Icon style={{ marginRight: 9 }} name="search-outline" size={SIZES.h9} color={COLORS.accent}/>
          <Icon name="ellipsis-horizontal-circle-outline" size={SIZES.h9} color={COLORS.accent}/>
          </View>
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
                    color: COLORS.textPrimary,
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
              <ImageBackground
                style={{
                  height: 60,
                  width: 60,
                  marginLeft: 10,
                  alignContent: 'center',
                  alignItems: 'center',
                  resizeMode: 'cover',
                  justifyContent: 'center',
                }}
                source={require('../images/ellipse.png')}>
                <Icon name="call" size={25} color={COLORS.red} />
              </ImageBackground>
            </View>
          </View>
          <Divider style={{ backgroundColor: COLORS.secondarySurface, height: 2, marginLeft: 10, marginRight: 10 }} />
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
                    color: COLORS.textPrimary,
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
              <ImageBackground
                style={{
                  height: 60,
                  width: 60,
                  marginLeft: 10,
                  alignContent: 'center',
                  alignItems: 'center',
                  resizeMode: 'cover',
                  justifyContent: 'center',
                }}
                source={require('../images/ellipse.png')}>
                <Icon name="call" size={25} color={COLORS.red} />
              </ImageBackground>
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
                    color: COLORS.textPrimary,
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
              <ImageBackground
                style={{
                  height: 60,
                  width: 60,
                  marginLeft: 10,
                  alignContent: 'center',
                  alignItems: 'center',
                  resizeMode: 'cover',
                  justifyContent: 'center',
                }}
                source={require('../images/ellipse_primary.png')}>
                <Icon name="videocam" size={25} color={COLORS.primaryColor} />
              </ImageBackground>
            </View>
          </View>
          <Divider style={{ backgroundColor: COLORS.secondarySurface, height: 2, marginLeft: 10, marginRight: 10 }} />
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
                    color: COLORS.textPrimary,
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
              <ImageBackground
                style={{
                  height: 60,
                  width: 60,
                  marginLeft: 10,
                  alignContent: 'center',
                  alignItems: 'center',
                  resizeMode: 'cover',
                  justifyContent: 'center',
                }}
                source={require('../images/ellipse_primary.png')}>
                <Icon name="call" size={25} color={COLORS.primaryColor} />
              </ImageBackground>
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
    padding: 10,
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
