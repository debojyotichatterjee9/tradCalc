import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import InputScreen from '../src/views/InputScreen';
import OutputScreen from '../src/views/OutputScreen';

export default class Routes extends Component<{}> {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene
            key="inputScreen"
            component={InputScreen}
            title="InputScreen"
            initial={true}
          />
          <Scene
            key="outputScreen"
            component={OutputScreen}
            title="OutputScreen"
          />
        </Stack>
      </Router>
    );
  }
}
