/**
 * App Navigation
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Components
import Drawer from '@containers/ui/DrawerContainer';

// Scenes
import AppLaunch from '@containers/Launch/LaunchContainer';
import Placeholder from '@components/general/Placeholder';
import AuthScenes from './auth';
import TabsScenes from './tabs';
import Dashboard from '@containers/home/dashboardView';
import TopupAmount from '@containers/topup/amount';
import TopupScan from '@containers/topup/scan';
import TopupSuccess from '@containers/topup/success';

/* Routes ==================================================================== */
export default Actions.create(
  <Scene key={'root'} {...AppConfig.navbarProps}>
    <Scene
      hideNavBar
      key={'splash'}
      component={AppLaunch}
      analyticsDesc={'AppLaunch: Launching App'}
    />

    {/* Auth */}
    {AuthScenes}

    {/* Main App */}
    <Scene key={'app'} {...AppConfig.navbarProps} title={AppConfig.appName} hideNavBar={false} type={ActionConst.RESET}>
      {/* Drawer Side Menu */}
      <Scene key={'home'} component={Drawer} initial={'tabBar'}>
        {/* Tabbar */}
        {TabsScenes}
      </Scene>

      {/* General */}
      <Scene
        clone
        key={'comingSoon'}
        title={'Coming Soon'}
        component={Placeholder}
        analyticsDesc={'Placeholder: Coming Soon'}
      />

      <Scene
        hideNavBar
        clone
        key={'dashboard'}
        title={''}
        component={Dashboard}
      />

      <Scene
        clone
        key={'topupAmount'}
        title={'Topup'}
        component={TopupAmount}
        analyticsDesc={'Topup: Choose amount'}
      />

      <Scene
        clone
        key={'topupScan'}
        title={'Topup'}
        component={TopupScan}
        analyticsDesc={'Topup: Scan QR Code'}
      />

      <Scene
        clone
        hideNavBar
        key={'topupSuccess'}
        component={TopupSuccess}
        analyticsDesc={'Topup: Success'}
      />
    </Scene>
  </Scene>,
);
