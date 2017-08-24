/**
 * Authenticate Screen
 *  - Entry screen for all authentication
 *  - User can tap to login, forget password, signup...
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { Spacer, Text, Button } from '@ui/';

const { width, height } = Dimensions.get('window');

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.brand.primary,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  logo: {
    width: AppSizes.screen.width * 0.85,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#FFF',
  },
  bgImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:null
  },
});

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  render = () => (
    <View style={[AppStyles.containerCentered, AppStyles.container, styles.background]}>
      <Image
        source={require('../../images/bg-main.png')}
        style={[styles.bgImg]}
      />
      <Image
        source={require('../../images/logo-splash.png')}
        style={[styles.logo]}
      />
      <Spacer size={60} />

      <View style={[styles.footer]}>
        <View style={{width: width, padding: 15}}>
          <Button
            title={'LOGIN'}
            icon={{ name: 'person', size: 26 }}
            onPress={Actions.login}
            backgroundColor={'#3DB788'}
          />
        </View>

        <View>
          <Button
            small
            title={'Skip »'}
            onPress={Actions.app}
            raised={false}
            color={'rgba(255,255,255,0.7)'}
            backgroundColor={'rgba(255,255,255,0.2)'}
          />
        </View>
        <View style={[AppStyles.flex1]} />
      </View>

      <Spacer size={40} />
    </View>
  )
}

/* Export Component ==================================================================== */
export default Authenticate;
