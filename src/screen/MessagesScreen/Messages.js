import React from 'react'
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const StackMessScreen = createNativeStackNavigator();

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

const Messages = props => {
    return (
        <StackMessScreen.Navigator>
          <StackMessScreen.Screen name="User" component={User} options={{headerShown: false}}/>
        </StackMessScreen.Navigator>
    );
}

Messages.propTypes = {}

export default Messages