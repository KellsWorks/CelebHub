import React, {useRef} from 'react';
import {View} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Footer from './components/Footer';
import Page from './components/Page';
import {useNavigation} from '@react-navigation/native';

const Onboarding = () => {
  const pagerRef = useRef(null);

  const navigation = useNavigation();

  const handlePageChange = (pageNumber) => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
    <View style={{flex: 1}}>
      <ViewPager style={{flex: 1}} initialPage={0} ref={pagerRef}>
        <View key="1">
          <Page
            backgroundColor="#03A9F4"
            iconName="message-circle"
            title="Interact with malawian celebrities"
          />
          <Footer
            backgroundColor="#29B6F6"
            rightButtonLabel="chevron-right"
            rightButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
        <View key="2">
          <Page
            backgroundColor="#039BE5"
            iconName="briefcase"
            title="Become a celebrity manager"
          />
          <Footer
            backgroundColor="#29B6F6"
            rightButtonLabel="chevron-right"
            leftButtonLabel="chevron-left"
            leftButtonPress={() => {
              handlePageChange(0);
            }}
            rightButtonPress={() => {
              handlePageChange(2);
            }}
          />
        </View>
        <View key="3">
          <Page
            backgroundColor="#0288D1"
            iconName="play-circle"
            title="Get links to latest music"
          />
          <Footer
            backgroundColor="#29B6F6"
            rightButtonLabel="log-in"
            leftButtonLabel="chevron-left"
            leftButtonPress={() => {
              handlePageChange(1);
            }}
            rightButtonPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default Onboarding;
