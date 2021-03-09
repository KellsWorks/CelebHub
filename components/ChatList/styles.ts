import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        justifyContent: 'space-between',
    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent: 'space-around',
    },
    avatar: {
        width: 70,
        height: 70,
        marginRight: 10,
        borderRadius: 80,
    },
    username: {
        fontFamily: 'Font-medium',
        fontSize: 17,
    },
    lastMessage: {
        fontFamily: 'Font-normal',
        fontSize: 15,
        color: 'gray',
    },
    time: {
        fontFamily: 'Font-normal',
        fontSize: 13,
        color: 'gray',
    },
});

export default styles;