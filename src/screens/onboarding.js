/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';

import Page from './components/Page';

const OnBoarding = () => {
    return(
        <View style={{ flex: 1 }}>
      <ViewPager style={{flex: 1}}>
          <View key="1">
          <Page
            backgroundColor="#ffc93c"
            iconName="sun"
            title="Welcome to the weather app"
          />
          </View>
        </ViewPager>
        </View>
    )
}

export default Onboarding;