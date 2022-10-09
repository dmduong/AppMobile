import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  feed: {
    backgroundColor: 'white',
    width: '100%',
    height: 750,
    marginBottom: 5,
  },
  topFeed: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftTopFeed: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    padding: 10,
  },

  iconLeftTopFeed: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderColor: '#888',
    borderWidth: 1,
    backgroundColor: '#888',
    borderRadius: 50,
  },
  textLeftTopFeed: {
    fontSize: 17,
    marginLeft: 7,
    color: '#888',
    fontWeight: '700',
  },

  rightTopFeed: {
    width: 60,
    height: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  centerFeed: {
    width: '100%',
    height: '65%',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  imageFeed: {
    width: '100%',
    height: '100%',
  },

  dotImage: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dot: {
    width: 10,
    height: 10,
    marginRight: 10,
    backgroundColor: '#888',
    borderRadius: 50,
  },
  bottomFeed: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },

  leftBottomFeed: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  icon: {
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    color: 'gray',
  },

  footerFeed: {
    width: '100%',
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
  },

  iconComment: {
    width: 25,
    height: 25,
    backgroundColor: 'gray',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  textComment: {
    fontSize: 17,
    paddingLeft: 5,
    fontWeight: '700',
  },

  comment: {
    height: '10%',
    width: '100%',
    paddingEnd: 20,
    paddingStart: 20,
    marginTop: 5,
  },
});

export default Styles;
