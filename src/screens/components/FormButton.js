import React from 'react';
import {Text, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const FormButton = ({buttonTitle, ...rest}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
          <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
};

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#6452A1',
        padding: 10,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'poppins_bold',
        color: '#FFF',
    },
});