import React, { useRef } from 'react';
import {View} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Footer from './components/Footer';
import Page from './components/Page';

const Onboarding = () => {

  const pagerRef = useRef(null);

  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
    <View style={{flex: 1}}>
      <ViewPager style={{flex: 1}} initialPage={0} ref={pagerRef}>
        <View key="1">
          <Page
            backgroundColor="#03A9F4"
            iconName="filter"
            title="Interact with malawian celebrities"
          />
          <Footer
            backgroundColor="#29B6F6"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
        <View key="2">
          <Page
            backgroundColor="#039BE5"
            iconName="cloud-drizzle"
            title="Become a celebrity manager"
          />
          <Footer
            backgroundColor="#29B6F6"
            rightButtonLabel="Next"
            leftButtonLabel="Back"
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
            iconName="cloud-drizzle"
            title="Get links to latest music"
          />
          <Footer
            backgroundColor="#29B6F6"
            rightButtonLabel="Continue"
            leftButtonLabel="Back"
            leftButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default Onboarding;
