import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {COLORS, FONTS, SIZES, PADDINGS, MARGINS} from '../../res/Themes';

const camera = ({}) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.heading}>Camera</Text>
      </View>
    </View>
  );
};

export default camera;

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
});
