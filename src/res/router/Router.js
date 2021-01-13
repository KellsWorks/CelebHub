import {Router, Scene} from 'react-native-router-flux';
import React from 'react';
import Onboarding from '../../screens/onboarding';
import Home from '../../screens/Home';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="onboarding" component={Onboarding} initial={true}/>
      <Scene key="home" component={Home} />
    </Scene>
  </Router>
);

export default Routes;