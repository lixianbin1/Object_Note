import React from 'react';
import { View, Text ,Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
import Homepage from './module/Home';
import Setting from './module/Setting';
import Details from './module/Details';


const AppNavigation = createStackNavigator({
  Homepage:Homepage,
  Setting:Setting,
  Details:Details,
},{
  initialRouteName:'Homepage',
  defaultNavigationOptions:{
    header:null,
  },
  transitionConfig: () => ({
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
  })
});

export default createAppContainer(AppNavigation);