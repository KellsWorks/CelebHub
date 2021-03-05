import React from 'react';
import {Text, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../res/Themes';

const windowHeight = Dimensions.get('window').height;

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: COLORS.primaryColor,
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
});
