import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Styles from './Styles';
const image1 = require('../../assets/images/background1.jpeg');

const Feed = props => {
  const {dataFeed, navigation} = props;
  const [data, setData] = useState(dataFeed);

  return (
    <>
      {data.length > 0 ? (
        data.map((item, index) => (
          <View key={index} style={Styles.feed}>
            <View style={Styles.topFeed}>
              <TouchableOpacity>
                <View style={Styles.leftTopFeed}>
                  <View style={Styles.iconLeftTopFeed}>
                    {item.user.image == '' ? (
                      <Icon name="user" size={32} color="#fff" />
                    ) : (
                      <Image
                        style={{
                          width: 45,
                          height: 45,
                          borderWidth: 1,
                          borderRadius: 50,
                        }}
                        source={image1}
                      />
                    )}
                  </View>
                  <Text style={Styles.textLeftTopFeed}>{item.user.name}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={Styles.rightTopFeed}>
                  <View style={Styles.iconRightTopFeed}>
                    <Icon name="ellipsis1" size={35} color="#88888" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={Styles.centerFeed}>
              <View>
                {item.image.map((image, index) => (
                  <Image
                    key={index}
                    style={Styles.imageFeed}
                    source={image.image}
                  />
                ))}
              </View>
              <View style={Styles.dotImage}>
                <Text style={[Styles.dot, {backgroundColor: 'white'}]}></Text>
                <Text style={[Styles.dot]}></Text>
                <Text style={[Styles.dot]}></Text>
              </View>
            </View>

            <View style={Styles.bottomFeed}>
              <View style={Styles.leftBottomFeed}>
                <TouchableOpacity>
                  <Icon
                    style={[
                      Styles.icon,
                      {color: item.like.isLike ? 'red' : ''},
                    ]}
                    name="heart"
                    size={32}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon style={Styles.icon} name="message1" size={32} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon style={Styles.icon} name="export" size={32} />
                </TouchableOpacity>
              </View>

              <View style={Styles.rightBottomFeed}>
                <TouchableOpacity>
                  <Icon
                    style={[Styles.icon, {color: 'gold'}]}
                    name="tago"
                    size={32}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={Styles.footerFeed}>
              <TouchableOpacity>
                <View style={Styles.iconComment}>
                  {item.like.userLike.image == '' ? (
                    <Icon name="user" size={20} color="#fff" />
                  ) : (
                    <Image
                      style={{
                        width: 25,
                        height: 25,
                        borderWidth: 1,
                        borderRadius: 50,
                      }}
                      source={item.like.userLike.image}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={Styles.textComment}>
                  {item.like.userLike.name} and {item.like.number} other people
                </Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.comment}>
              <TouchableOpacity>
                <Text numberOfLines={2} style={{fontSize: 17, lineHeight: 25}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 17, marginEnd: 15}}>
                    {item.user.name}
                  </Text>
                  {item.content}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text></Text>
      )}
    </>
  );
};

Feed.propTypes = {
  dataFeed: PropTypes.array,
  navigation: PropTypes.object,
};

Feed.defaultProps = {
  dataFeed: [],
  navigation: {},
};

export default Feed;
