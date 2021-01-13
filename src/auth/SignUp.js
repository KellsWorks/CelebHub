import React from 'react';
import {StyleSheet, Text, Button, Image, View} from 'react-native';
import FormInput from '../screens/components/FormInput';
import FormButton from '../screens/components/FormButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SignUp = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.container}>
        <Image source={require('../screens/images/ForgotPassword.png')} />
        <Text style={{marginTop: 10, fontFamily: 'poppins_bold', fontSize: 25}}>
          Forgot password
        </Text>
        <Text
          style={{
            fontFamily: 'poppins_regular',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          Enter your phone number below. We will send you an SMS with a pin code
          to confirm your identity.
        </Text>
        <View style={{margin: 20}}>
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
});
