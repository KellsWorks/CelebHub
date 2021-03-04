import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {COLORS, FONTS, SIZES, PADDINGS, MARGINS} from '../../res/Themes';

export class settings extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.heading}>Settings</Text>
        </View>
      </View>
    );
  }
}

export default settings;

const styles = StyleSheet.create({
  header: {
    paddingTop: 64,
    paddingBottom: 16,
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
