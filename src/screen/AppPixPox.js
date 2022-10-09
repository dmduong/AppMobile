import React from 'react';
import PropTypes from 'prop-types';
import {View, Button, Text, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Home from './Home/Home';
import Messages from './MessagesScreen/Messages';
import Notifications from './NotificationsScreen/Notifications';
import Account from './AccountScreen/Account';
const image1 = require('../assets/images/background1.jpeg');
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 45, height: 45, objectFix: 'cover', borderRadius: 50}}
        source={image1}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: 'white',
          paddingLeft: 5,
        }}>
        PicPox
      </Text>
    </View>
  );
}

function TitleUserSetting() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <Icon name="unlock" size={28} color="#fff" />
      <Text
        style={{
          fontSize: 24,
          fontWeight: '500',
          color: 'white',
          paddingLeft: 5,
        }}>
        Dai Minh Duong
      </Text>
    </View>
  );
}

const headerRightFnc = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 10,
      }}>
      <TouchableOpacity>
        <View style={{padding: 10}}>
          <Icon
            style={{
              borderWidth: 2,
              borderColor: '#fff',
              borderRadius: 50,
              height: 40,
              width: 40,
              padding: 5,
            }}
            name="plus"
            size={28}
            color="#fff"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{padding: 10}}>
          <Icon
            style={{
              borderWidth: 2,
              borderColor: '#fff',
              borderRadius: 50,
              height: 40,
              width: 40,
              padding: 5,
            }}
            name="addusergroup"
            size={28}
            color="#fff"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const headerRightUserFnc = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 1,
      }}>
      <TouchableOpacity>
        <View style={{padding: 10}}>
          <Icon
            style={{
              height: 40,
              width: 40,
              padding: 5,
            }}
            name="plus"
            size={28}
            color="#fff"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{padding: 10}}>
          <Icon
            style={{paddingEnd: 10}}
            name="menuunfold"
            size={28}
            color="#fff"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const tabBarOptions = {
  tabBarActiveTintColor: '#9966ff', // Active thì có màu xanh lá cây
  tabBarInactiveTintColor: 'gray', // Không active thì mày xám
  tabBarLabelStyle: {
    fontSize: 17,
  },
  tabBarStyle: {
    height: 75,
    paddingBottom: 5,
    paddingTop: 5,
  },
};

const AppPixPox = props => {
  return (
    <Tab.Navigator initialRouteName="homeScreen" screenOptions={tabBarOptions}>
      <Tab.Screen name="homeScreen" component={Home} options={options1} />
      <Tab.Screen
        name="MessagesScreen"
        component={Messages}
        options={options2}
      />
      <Tab.Screen
        name="NoticeScreen"
        component={Notifications}
        options={options3}
      />
      <Tab.Screen name="userScreen" component={Account} options={options4} />
    </Tab.Navigator>
  );
};

AppPixPox.propTypes = {};

const options1 = {
  title: 'Home',
  headerTitle: props => <LogoTitle {...props} />,
  // headerShown: false,
  headerStyle: {
    backgroundColor: '#9966ff',
    height: 70,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  headerRight: headerRightFnc,
  headerTitleAlign: 'start',
  headerTintColor: '#fff',
  tabBarLabel: 'Home',
  //Chuyền biến color để khi active một tab thì hiển thị màu đó.!
  tabBarIcon: ({color}) => <Icon name="home" size={32} color={color} />,
};

const options2 = {
  title: 'Messages',
  // headerShown: false,
  headerStyle: {
    backgroundColor: '#9966ff',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  tabBarLabel: 'Messages',
  //Chuyền biến color để khi active một tab thì hiển thị màu đó.!
  tabBarIcon: ({color}) => <Icon name="message1" size={32} color={color} />,
};

const options3 = {
  title: 'Notifications',
  // headerShown: false,
  headerStyle: {
    backgroundColor: '#9966ff',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#9966ff',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  tabBarLabel: 'Notifications',
  //Chuyền biến color để khi active một tab thì hiển thị màu đó.!
  tabBarIcon: ({color}) => <Icon name="bells" size={32} color={color} />,
};

const options4 = {
  // title: 'Account',
  headerTitle: props => <TitleUserSetting {...props} />,
  // headerShown: false,
  headerStyle: {
    backgroundColor: '#9966ff',
    height: 70,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  headerRight: headerRightUserFnc,
  headerTitleAlign: 'start',
  headerTintColor: '#fff',
  tabBarLabel: 'Account',
  //Chuyền biến color để khi active một tab thì hiển thị màu đó.!
  tabBarIcon: ({color}) => <Icon name="user" size={32} color={color} />,
};

export default AppPixPox;
