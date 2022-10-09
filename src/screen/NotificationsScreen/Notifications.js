import React from 'react'
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const StackNotificationsScreen = createNativeStackNavigator();

const Detail = () => {
    return (
      <Text><Icon name="checkcircle" size={30} color="#900" /></Text>
    );
  }
  
  
  const User = () => {
    return (
      <Text>User</Text>
    );
  }

const Notifications = props => {
    return (
        <StackNotificationsScreen.Navigator>
          <StackNotificationsScreen.Screen name="User" component={User} options={{headerShown: false}}/>
        </StackNotificationsScreen.Navigator>
    );
}

Notifications.propTypes = {}

export default Notifications