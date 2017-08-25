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
  ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppColors, AppStyles, AppSizes } from '@theme/';

import {
  Alerts,
  Button,
  Card,
  Spacer,
  Text,
  List,
  ListItem,
  FormInput,
  FormLabel,
} from '@components/ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  launchImage: {
    width: AppSizes.screen.width,
    height: AppSizes.screen.height,
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

  image: {
    width: 80,
    height: 80,
  },

  content:{
    flex:1,
    alignItems:'center',
    padding: 10,
  },
  buttonOutline: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: AppColors.brand.link,
    padding: 10,
    borderRadius: 3,
    color: AppColors.brand.link,
  },

  closeButton: {
    position: 'absolute',
    left: 10,
    top: 10,
  }
});

/* Component ==================================================================== */
class TopupSuccess extends Component {
  static componentName = 'TopupSuccess';

  componentDidMount = () => {
    StatusBar.setHidden(false, true);
  }

  render = () => (
    <View style={[AppStyles.container]}>
      <ScrollView
        automaticallyAdjustContentInsets={false}
        style={[AppStyles.container]}
      >

      <View style={{padding: 15, alignItems: 'center', flex: 1, backgroundColor: AppColors.brand.primary}}>
        <View style={styles.closeButton}>
          <TouchableOpacity onPress={Actions.dashboard}>
            <Text style={{fontSize: 20, color: 'rgba(255,255,255,0.5)'}}>X</Text>
          </TouchableOpacity>
        </View>
        <Spacer size={60} />
        <Image
          source={require('../../images/success.png')}
          style={{width: 80, height: 80}}
        />
        <Spacer size={20} />
        <Text p style={{color: 'white', fontWeight: 'bold'}}>RM100.00 reloaded to Melissa Successfully.</Text>
        <Spacer size={30} />
      </View>

      <View style={{padding: 15}}>
        <Spacer size={30} />
        <Text h5 style={{color: '#888'}}>Date</Text>
        <Text p style={{fontSize: 20}}>Jul 05, 2017</Text>
        <Spacer size={30} />
        <Text h5 style={{color: '#888'}}>From</Text>
        <Text p style={{fontSize: 20}}>OrebPay Cash Load</Text>
        <Spacer size={30} />
        <Text h5 style={{color: '#888'}}>Transaction Type</Text>
        <Text p style={{fontSize: 20}}>Transfer - Completed</Text>
        <Spacer size={30} />
      </View>

      </ScrollView>
    </View>
  );
}

/* Export Component ==================================================================== */
export default TopupSuccess;
