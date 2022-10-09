import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Styles from './Styles';
const image1 = require('../../../assets/images/background1.jpeg');
import Icon from 'react-native-vector-icons/AntDesign';

const Info = props => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.container}>
        <View style={Styles.containerTop}>
          <View style={Styles.containerTopLeft}>
            <TouchableOpacity>
              <View style={Styles.item}>
                <Image style={Styles.itemImage} source={image1} />
                <Text style={Styles.textImage}>Dai Minh Duong</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={Styles.containerTopRight}>
            <TouchableOpacity>
              <View style={Styles.itemRight}>
                <Text
                  numberOfLines={1}
                  style={[Styles.textRight, {fontSize: 20}]}>
                  15
                </Text>
                <Text numberOfLines={1} style={Styles.textRight}>
                  Writer
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Styles.itemRight}>
                <Text
                  numberOfLines={1}
                  style={[Styles.textRight, {fontSize: 20}]}>
                  20.000
                </Text>
                <Text numberOfLines={1} style={Styles.textRight}>
                  Follower
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Styles.itemRight}>
                <Text
                  numberOfLines={1}
                  style={[Styles.textRight, {fontSize: 20}]}>
                  10.000
                </Text>
                <Text numberOfLines={1} style={Styles.textRight}>
                  Follow Follow Follow
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={Styles.containerButton}>
          <View style={{width: '87%'}}>
            <Button
              onPress={() => alert('hello')}
              title="Edit personal page"
              color="#888"
              accessibilityLabel="Edit personal page"
            />
          </View>
          <TouchableOpacity>
            <Icon
              name="adduser"
              style={{
                textAlign: 'center',
                marginLeft: 10,
                backgroundColor: 'gray',
                height: 36,
                borderRadius: 5,
                padding: 5,
              }}
              size={25}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.containerStory}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <TouchableOpacity>
              <View style={Styles.storyItem}>
                <Image style={Styles.storyImage} source={image1} />
                <Text style={Styles.storyText}>Highlights</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Styles.storyItem}>
                <Image style={Styles.storyImage} source={image1} />
                <Text style={Styles.storyText}>Highlights</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={Styles.storyItem}>
                <View style={Styles.AddStory}>
                  <Icon name="plus" size={40} color="#888" />
                </View>
                <Text style={Styles.storyText}>Add Story</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={Styles.containerBottom}>
          <View style={Styles.menuTab}>
            <TouchableOpacity>
              <Icon
                name="appstore1"
                style={{borderBottomWidth: 3, borderBottomColor: '#9966ff'}}
                size={38}
                color="#9966ff"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="picture" size={38} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="tagso" size={38} color="grey" />
            </TouchableOpacity>
          </View>
          <View style={Styles.listMenuImage}>
            <TouchableOpacity>
              <View style={Styles.imageItem}>
                <Image style={Styles.image} source={image1} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Styles.imageItem}>
                <Image style={Styles.image} source={image1} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Styles.imageItem}>
                <Image style={Styles.image} source={image1} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Styles.imageItem}>
                <Image style={Styles.image} source={image1} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Styles.imageItem}>
                <Image style={Styles.image} source={image1} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Styles.imageItem}>
                <Image style={Styles.image} source={image1} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Styles.imageItem}>
                <Image style={Styles.image} source={image1} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Styles.imageItem}>
                <Image style={Styles.image} source={image1} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Styles.imageItem}>
                <Image style={Styles.image} source={image1} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Styles.imageItem}>
                <Image style={Styles.image} source={image1} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Styles.imageItem}>
                <Image style={Styles.image} source={image1} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

Info.propTypes = {};

export default Info;
