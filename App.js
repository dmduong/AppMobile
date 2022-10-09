import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import Login from './src/screen/Login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppPixPox from './src/screen/AppPixPox';

const Stack = createNativeStackNavigator();

const App = props => {
  let isLogin = false;
  return (
    <NavigationContainer>
      {isLogin ? (
        <Stack.Navigator initialRouteName="AppPixPox">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AppPixPox"
            component={AppPixPox}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AppPixPox"
            component={AppPixPox}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const option = {
  title: 'My home',
};

App.propTypes = {};

export default App;
