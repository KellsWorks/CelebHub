/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View,Text,Image,Dimensions,SafeAreaView,StyleSheet,Animated} from 'react-native';
import {COLORS, FONTS} from '../res/Themes';
import {Actions} from 'react-native-router-flux';

const width = Dimensions.get('window').width;

export const SIZES = {
  width,
};

const onBoardings = [

  {
    title: 'Connect with celebrities',
    description: 'Interact with Malawian celebrities',
    img: require('./images/GroupChat.png'),
    bg: '#189372',
  },
  {
    title: 'Social links',
    description: 'Latest links to new stories, music and others',
    img: require('./images/ChatMaintenance.png'),
    bg: '#FF0044'
  },
  {
    title: 'Build your profile',
    description: 'Manage your lifestyle through interaction',
    img: require('./images/ChatConnect.png'),
    bg: '#011829',
  },

];

const Onboarding = ({navigation}) => {

  const scrollX = new Animated.Value(0);
  const [completed, setCompleted] = React.useState(false);

  React.useEffect(() => {
    scrollX.addListener(({value}) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1){
        setCompleted(true);
      }
    });

    return  () => scrollX.removeListener();
  }, [scrollX]);

  function renderContent(){

    return (
      <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEnabled
      decelerationRate={0}
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([
        { nativeEvent: { contentOffset: { x: scrollX}}},
      ], {useNativeDriver: false})}
      >
      {onBoardings.map((item, index) => (
        <View key={index} style={{width: width, backgroundColor: item.bg}}>
          <View style={styles.imgContainer}>
            <Image source={item.img} resizeMode="cover" style={styles.imgDimension}/>
          </View>
          <View style={styles.textHolder}>
            <Text style={styles.heading}>{item.title}</Text>
            <Text style={styles.content}>{item.description}</Text>
          </View>
          <View style={styles.skipContainer}
           >
            <Text onPress={() => navigation.navigate('SignIn')}
           style={styles.skipText}>{completed ? 'Continue' : 'Skip'}</Text>
          </View>
        </View>
      ))}
      </Animated.ScrollView>
    );
  }

  function renderDots(){

    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {

          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [12, 17, 12],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
          key={`dot-${index}`}
          opacity={opacity}
          style={[styles.dots, {width: dotSize, height: dotSize}]} />
          );
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
      {renderContent()}
      </View>
      <View style={styles.dotsRootContainer}>
        {renderDots()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0044',
  },
  viewStyle: {
    width: 600,
  },
  imgContainer: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  imgDimension: {
    width: 250,
    height: 200,
  },
  textHolder: {
    position: 'absolute', bottom: '20%', left: 40, right: 40, color: '#FFF',
  },
  heading: {
    fontFamily: FONTS.bold, fontSize: 30, textAlign: 'center', color: '#FFF',
  },
  content: {
    fontFamily: FONTS.normal, fontSize: 16, textAlign: 'center', color: '#FFF',
  },
  dots: {
    borderRadius: 12,
    backgroundColor: COLORS.primaryColor,
    marginHorizontal: 10 / 2,
  },
  dotsRootContainer: {
    position: 'absolute',
    bottom: 50 > 700 ? '50%' : '35%',
  },
  dotsContainer: {
    flexDirection: 'row',
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipText: {
    color: COLORS.white,
    fontFamily: FONTS.normal,
    alignSelf: 'center',
  },
  skipContainer: {
    position: 'absolute', bottom: 0,
    right: 0,width: 150, height: 60,
    paddingLeft: 20,
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
export default Onboarding;
