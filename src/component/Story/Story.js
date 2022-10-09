import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Story = props => {
  const {navigation, dataStory} = props;
  const [story, setStory] = useState(dataStory);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={Styles.viewStory}>
      <TouchableOpacity>
        <View style={Styles.story}>
          <View style={Styles.storyIcon}>
            <Image style={Styles.icons} source={story[0].image} />
          </View>
          <View style={Styles.storyContent}>
            <Text numberOfLines={1} style={Styles.content}>
              {story[0].name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {story[1].length > 0 ? (
        story[1].map((data, index) => (
          <TouchableOpacity key={index}>
            <View style={Styles.story}>
              <View style={Styles.storyIcon}>
                <Image style={Styles.icons} source={data.image} />
              </View>
              <View style={Styles.storyContent}>
                <Text
                  numberOfLines={1}
                  style={[Styles.content, {color: 'black'}]}>
                  {data.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text></Text>
      )}
    </ScrollView>
  );
};

Story.propTypes = {
  dataStory: PropTypes.array,
  navigation: PropTypes.object,
};

Story.defaultProps = {
  dataStory: [],
  navigation: {},
};

export default Story;
