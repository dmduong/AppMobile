import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Button, SafeAreaView, ScrollView} from 'react-native';
import Story from '../../../component/Story/Story';
import Feed from '../../../component/Feeds/Feed';
const image1 = require('../../../assets/images/background1.jpeg');

const data = [
  {
    id: 1,
    name: 'Your News',
    image: image1,
  },
  [
    {
      id: 2,
      name: 'Dai minh duong',
      image: image1,
    },
    {
      id: 3,
      name: 'Dai minh duong',
      image: image1,
    },
    {
      id: 4,
      name: 'Dai minh duong',
      image: image1,
    },
    {
      id: 5,
      name: 'Dai minh duong',
      image: image1,
    },
    {
      id: 6,
      name: 'Dai minh duong',
      image: image1,
    },
    {
      id: 7,
      name: 'Dai minh duong',
      image: image1,
    },
    {
      id: 8,
      name: 'Dai minh duong',
      image: image1,
    },
    {
      id: 9,
      name: 'Dai minh duong',
      image: image1,
    },
  ],
];

const listFeed = [
  {
    id: 1,
    content:
      'Những Bản Nhạc Anime Hay Nhất Của Ghibli Studio. Đây là bộ sưu tập những bản nhạc không lời trong các bộ phim anime kinh điển của',
    like: {
      userLike: {id: 1, name: 'DaiMinhDuong', image: image1},
      number: 40,
      isLike: false,
    },
    image: [
      {
        id: 1,
        image: image1,
      },
    ],
    user: {
      id: 1100,
      name: 'Dai Minh Duong',
      image: '',
    },
  },
  {
    id: 2,
    content:
      'Những Bản Nhạc Anime Hay Nhất Của Ghibli Studio. Đây là bộ sưu tập những bản nhạc không lời trong các bộ phim anime kinh điển của',
    like: {
      userLike: {id: 1, name: 'DaiMinhDuong', image: ''},
      number: 40,
      isLike: false,
    },
    image: [
      {
        id: 1,
        image: image1,
      },
    ],
    user: {
      id: 1100,
      name: 'Dai Minh Duong',
      image: image1,
    },
  },
  {
    id: 3,
    content:
      'Những Bản Nhạc Anime Hay Nhất Của Ghibli Studio. Đây là bộ sưu tập những bản nhạc không lời trong các bộ phim anime kinh điển của',
    like: {
      userLike: {id: 1, name: 'DaiMinhDuong', image: image1},
      number: 40,
      isLike: true,
    },
    image: [
      {
        id: 1,
        image: image1,
      },
    ],
    user: {
      id: 1100,
      name: 'Dai Minh Duong',
      image: image1,
    },
  },
];

const News = props => {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Story dataStory={data} navigation={navigation}></Story>
        <View style={{marginTop: 10}}>
          <Feed dataFeed={listFeed} navigation={navigation}></Feed>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

News.propTypes = {
  navigation: PropTypes.object,
};

News.defaultProps = {
  navigation: {},
};

export default News;
