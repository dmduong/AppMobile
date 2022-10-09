import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Info from './Info/Info';

const Tab = createBottomTabNavigator();
const StackAccountScreen = createNativeStackNavigator();

const Account = props => {
  return (
    <StackAccountScreen.Navigator>
      <StackAccountScreen.Screen
        name="Info"
        component={Info}
        options={{headerShown: false}}
      />
    </StackAccountScreen.Navigator>
  );
};

Account.propTypes = {};

export default Account;
