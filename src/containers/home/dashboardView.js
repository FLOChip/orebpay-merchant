/**
 * Style Guide
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import {
  View,
  Alert,
  ListView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import { SocialIcon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppColors, AppStyles, AppSizes } from '@theme/';

// Components
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

// Example Data
const dummyData1 = [
  { title: 'Settings', icon: 'build' },
  { title: 'Alarms', icon: 'alarm' },
  { title: 'Cards', icon: 'card-membership' },
  { title: 'Favourites', icon: 'grade' },
  { title: 'Help', icon: 'help' },
];

const dummyData2 = [
  {
    title: 'Jim Collins',
    role: 'Vice President',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/arashmil/128.jpg',
  },
  {
    title: 'Sarah Franklin',
    role: 'Vice Chairman',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
  },
  {
    title: 'James Fringe',
    role: 'CEO',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sindresorhus/128.jpg',
  },
  {
    title: 'Janice Overton',
    role: 'Lead Developer',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg',
  },
  {
    title: 'Lisa Smith',
    role: 'CTO',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vista/128.jpg',
  },
];

const { width, height } = Dimensions.get('window');

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  bgImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  logo: {
    width: AppSizes.screen.width * 0.5,
    resizeMode: 'contain',
  },
  activityItem: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    margin: 5,
  },
  timestamp: {
    position: 'absolute',
    right: 15,
    top: 10,
  }
});

/* Component ==================================================================== */
class Dashboard extends Component {
  static componentName = 'Dashboard';

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  render = () => (
    <View style={[AppStyles.container, {alignItems: 'center', width: width}]}>
      <View style={{backgroundColor: AppColors.brand.primary, height: 300, width: width, alignItems: 'center'}}>
        <Image
          source={require('../../images/bg-main.png')}
          style={[styles.bgImg]}
        />
        <View style={{padding: 10}}>
          <Image
            source={require('../../images/logo-text.png')}
            style={[styles.logo]}
          />
          <Text style={{color: 'rgba(255,255,255,0.8)', textAlign: 'center', fontSize: 16}}>Balance: RM 2335.00</Text>
          <Spacer size={35} />
          <View style={AppStyles.row}>
            <View style={AppStyles.flex1}>
              <TouchableOpacity onPress={Actions.topupAmount} style={{alignItems: "center"}}>
                <Image
                  source={require('../../images/reload.png')}
                  style={[styles.logo]}
                />
                <Spacer size={10} />
                <Text style={{color: 'white', color: 'rgba(255,255,255,0.7)', fontSize: 12}}>Topup</Text>
              </TouchableOpacity>
            </View>
            <View style={AppStyles.flex1}>
              <TouchableOpacity onPress={Actions.topupAmount} style={{alignItems: "center"}}>
                <Image
                  source={require('../../images/receive.png')}
                  style={[styles.logo]}
                />
                <Spacer size={10} />
                <Text style={{color: 'white', color: 'rgba(255,255,255,0.7)', fontSize: 12}}>Receive</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>

      <ScrollView style={{width: width, paddingTop: 10}}>
        <View style={styles.activityItem}>
          <Text style={{fontSize: 16}}>RM30.00</Text>
          <Text style={{fontSize: 12, color: '#999'}}>Received from Melissa Chen</Text>
          <View style={styles.timestamp}><Text style={{fontSize: 12, color: '#cccccc'}}>9:00pm</Text></View>
        </View>
        <View style={styles.activityItem}>
          <Text style={{fontSize: 16}}>RM5.20</Text>
          <Text style={{fontSize: 12, color: '#999'}}>Received from John</Text>
          <View style={styles.timestamp}><Text style={{fontSize: 12, color: '#cccccc'}}>8:45pm</Text></View>
        </View>
        <View style={styles.activityItem}>
          <Text style={{fontSize: 16}}>RM109.48</Text>
          <Text style={{fontSize: 12, color: '#999'}}>Received from Ah Kau</Text>
          <View style={styles.timestamp}><Text style={{fontSize: 12, color: '#cccccc'}}>8:33pm</Text></View>
        </View>
        <View style={styles.activityItem}>
          <Text style={{fontSize: 16}}>RM89.10</Text>
          <Text style={{fontSize: 12, color: '#999'}}>Received from Ali</Text>
          <View style={styles.timestamp}><Text style={{fontSize: 12, color: '#cccccc'}}>8:14pm</Text></View>
        </View>
        <View style={styles.activityItem}>
          <Text style={{fontSize: 16}}>RM20.00</Text>
          <Text style={{fontSize: 12, color: '#999'}}>Received from Mutu</Text>
          <View style={styles.timestamp}><Text style={{fontSize: 12, color: '#cccccc'}}>7:59pm</Text></View>
        </View>
      </ScrollView>
    </View>
  )
}

/* Export Component ==================================================================== */
export default Dashboard;
