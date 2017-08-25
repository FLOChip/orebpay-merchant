/**
 * Launch Screen
 *  - Shows a nice loading screen whilst:
 *    - Preloading any specified app content
 *    - Checking if user is logged in, and redirects from there
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Alert,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  launchImage: {
    width: AppSizes.screen.width,
    height: AppSizes.screen.height,
  },
});

/* Component ==================================================================== */
class CamLaunch extends Component {
  static componentName = 'CamLaunch';

  componentDidMount = () => {
    // Show status bar on app launch
    StatusBar.setHidden(true, false);
  }

  render = () => (
    <View style={[AppStyles.container]}>
      <TouchableOpacity onPress={Actions.topupSuccess}>
        <Image
          source={require('../../images/qr-sample.png')}
          style={[styles.launchImage, AppStyles.containerCentered]}
        >
        </Image>
      </TouchableOpacity>
    </View>
  );
}

/* Export Component ==================================================================== */
export default CamLaunch;
