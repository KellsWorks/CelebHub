import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';
import { IconButton } from 'react-native-paper';

const RoundedButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      style={{ alignItems: 'center', justifyContent: 'center' }}
      onPress={onPress}
    >
      <Icon name={label} type="feather" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default RoundedButton;