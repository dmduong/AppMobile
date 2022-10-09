import React from 'react'
import PropTypes from 'prop-types';
import {View, Button,Text, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import Account from '../AccountScreen/Account';
import Messages from '../MessagesScreen/Messages';
import Notifications from '../NotificationsScreen/Notifications';
import News from './News/News';
const image1 = require('../../assets/images/background1.jpeg');
const Tab = createBottomTabNavigator();
const StackHomeScreen = createNativeStackNavigator();

const Home = ({navigation}) => {

  return (
      <StackHomeScreen.Navigator initialRouteName="News">
        <StackHomeScreen.Screen name="News" component={News} options={{headerShown: false}}/>
      </StackHomeScreen.Navigator>
  );
}

Home.propTypes = {}

export default Home