import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {COLORS, FONTS, SIZES, PADDINGS, MARGINS} from '../../res/Themes';

export class settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Settings</Text>
        </View>
        <Text>This is a blank view</Text>
      </View>
    );
  }
}

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  welcome: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.h2,
    paddingLeft: PADDINGS.pl5,
    color: COLORS.accent,
  },
  name: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.h6,
    paddingLeft: PADDINGS.pl5,
    color: COLORS.accent,
  },
  imageHolder: {
    padding: PADDINGS.pa20,
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 150 / 2,
    borderColor: COLORS.primaryColor,
  },
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
});
