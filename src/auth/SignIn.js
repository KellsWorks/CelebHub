/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import FormInput from '../screens/components/FormInput';
import FormButton from '../screens/components/FormButton';
import SocialButton from '../screens/components/SocialButton';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Image source={require('../icons/chat.png')} style={styles.logo} />
      <Text style={styles.text}>CelebHub</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Sign in"
        onPress={() => alert('Sign in clicked!')}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot password?</Text>
      </TouchableOpacity>

      <SocialButton
        buttonTitle="Sign in with facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4" />

      <SocialButton
        buttonTitle="Sign in with google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea" />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>
          Don't have an account? Create one
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'poppins_bold',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButtom: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontFamily: 'poppins_regular',
    color: '#6452A1',
  },
});
