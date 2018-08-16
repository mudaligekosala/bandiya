import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation';

//import login view
import LoginPage from './src/Component/Views/Login';

Navigation.registerComponent("bandiya.LoginPage", () => LoginPage);

Navigation.startSingleScreenApp({
  screen:{
    screen: 'bandiya.LoginPage',
    title: 'Login',
    navigatorStyle:{
       navBarHidden: true
    }

  }
})