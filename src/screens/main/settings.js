import React, {Component} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {COLORS, FONTS, SIZES, PADDINGS, MARGINS} from '../../res/Themes';

export class settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Settings</Text>
        </View>
        <View style={styles.imageHolder}>
          <Image
            source={{
              uri:
                'https://i0.wp.com/malawi24.com/wp-content/uploads/2020/06/Martse-musician.jpg?fit=608%2C472&ssl=1',
            }}
            style={styles.image}
          />
          <View>
          <Text style={styles.welcome}>Good morning!</Text>
          <Text style={styles.name}>Ella chiwaya</Text>
          </View>
        </View>
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
