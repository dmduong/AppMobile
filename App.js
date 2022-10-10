import React, {useState, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import Login from './src/screen/Login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppPixPox from './src/screen/AppPixPox';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {freshToken} from './src/store/action';
import {useDispatch, useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();

const ShowLoading = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
      }}>
      <Text style={{fontSize: 20, fontWeight: '600'}}>Loading ...</Text>
    </View>
  );
};

const Index = () => {
  const {isLoading, isSignout, userToken} = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    const resfresh = async () => {
      dispatch(freshToken('userToken'));
    };
    resfresh();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="Login"
            component={ShowLoading}
            options={{
              headerShown: false,
            }}
          />
        ) : userToken == '' ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              animationTypeForReplace: isSignout ? 'pop' : 'push',
            }}
          />
        ) : (
          <Stack.Screen
            name="AppPixPox"
            component={AppPixPox}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = props => {
  return (
    <Provider store={store}>
      <Index></Index>
    </Provider>
  );
};

const option = {
  title: 'My home',
};

App.propTypes = {};

export default App;
