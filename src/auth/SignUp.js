/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import FormInput from '../screens/components/FormInput';
import FormButton from '../screens/components/FormButton';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image source={require('../screens/images/ForgotPassword.png')} />
        <Text style={styles.header}>
          Forgot password
        </Text>
        <Text style={styles.text}>
          Enter your phone number below. We will send you an SMS with a pin code
          to confirm your identity.
        </Text>
        <View style={styles.m20}>
          <FormInput
            placeholderText="Enter your phone number"
            iconType="mobile1"
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <FormButton buttonTitle="Send SMS" />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    marginTop: 10, fontFamily: 'poppins_bold', fontSize: 25,
  },
  text: {
    fontFamily: 'poppins_regular',
            alignSelf: 'center',
            marginTop: 20,
  },
  m20: {
    margin: 20,
  },
});
