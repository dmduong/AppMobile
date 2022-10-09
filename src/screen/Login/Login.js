import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
const image1 = require('../../assets/images/background1.jpeg');
import Styles from './Styles';

const user = {
  userName: 'dmduong',
  email: 'minhduong14499@gmail.com',
  password: '1',
};

const Login = props => {
  const {navigation} = props;

  const [text, setText] = useState({
    userName: '',
    password: '',
  });

  const handleOnchangeUserName = userName => {
    setText({
      ...text,
      userName: userName,
    });
  };

  const handleOnchangePass = pass => {
    setText({
      ...text,
      password: pass,
    });
  };

  const handleSubmit = async (info, navi) => {
    if (info.userName == '' || info.password == '') {
      alert('Please, Input your name and password !');
    } else if (
      info.userName == user.userName &&
      info.password == user.password
    ) {
      const users = {
        user: info.userName,
        isLogin: true,
      };

      await navi.navigate('AppPixPox');
      setText({
        userName: '',
        password: '',
      });
    } else {
      alert('Password or UserName incorrect !');
    }
  };

  return (
    <View style={Styles.container}>
      <ImageBackground source={image1} resizeMode="cover" style={Styles.image}>
        <View style={Styles.top}>
          <View style={Styles.titleStart}>
            <Text style={Styles.textTitle}>Welcome</Text>
            <Text style={Styles.textTitle1}>Hello, How are you, today ?</Text>
          </View>
        </View>

        <View style={Styles.bottom}>
          <SafeAreaView>
            <View style={Styles.bodyInput}>
              <View>
                <TextInput
                  value={text.userName}
                  onChangeText={userName => handleOnchangeUserName(userName)}
                  style={Styles.textInput}
                  placeholder={'User name'}
                  placeholderTextColor={'white'}
                />
              </View>

              <View>
                <TextInput
                  value={text.password}
                  onChangeText={passwort => handleOnchangePass(passwort)}
                  placeholder="Password"
                  keyboardType="default"
                  secureTextEntry={true}
                  multiline={false}
                  style={Styles.textInput}
                  placeholderTextColor={'white'}
                />
              </View>

              <View>
                <TouchableOpacity
                  onPress={() => handleSubmit(text, navigation)}>
                  <View style={Styles.button}>
                    <Text style={Styles.textButton}>Login</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={Styles.orderElse}>
                <Text style={Styles.textLoginElse}>Or</Text>
              </View>

              <View style={Styles.orderElse}>
                <Text style={Styles.textLoginElse}>Create new account ?</Text>
                <Text style={Styles.textLoginElse}>
                  You are forget password ?
                </Text>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.object,
};

Login.defaultProps = {
  navigation: {},
};

export default Login;
