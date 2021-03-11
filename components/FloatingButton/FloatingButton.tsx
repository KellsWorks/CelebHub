import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, Animated  } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import Colors from '../../constants/Colors'

export class FloatingButton extends Component {

    animation = new Animated.Value(0)

    toggleMenu = () => {

        const toValue = this.open ? 0 : 1;

        Animated.spring(this.animation, {
            toValue,
            friction: 5,
            useNativeDriver: true
        }).start();

        this.open = !this.open;
    }

    render() {
        
        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        }

        const videoStyle = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -80]
                    })
                }
            ]  
        }

        const callStyle = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -140]
                    })
                }
            ]  
        }

        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, styles.menu, videoStyle]}>
                        <Ionicons name="videocam" color="white" size={25}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, styles.menu, callStyle]}>
                        <Ionicons name="call" color="white" size={25}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
                        <Ionicons name="add" color="white" size={25}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default FloatingButton

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute',
    },
    button : {
        position: 'absolute',
        height: 65,
        width: 65,
        borderRadius: 65 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: Colors.light.tint,
        shadowOpacity: 0.3,
        shadowOffset: {height: 10, width: 10},
    },
    menu : {
        backgroundColor: Colors.light.tint,
    },
    secondary: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
    },
})
