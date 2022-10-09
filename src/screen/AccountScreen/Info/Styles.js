import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: 'red',
  },
  containerTop: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerTopLeft: {
    width: '35%',
    height: '100%',
  },
  containerTopRight: {
    width: '65%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  item: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemImage: {
    width: '76%',
    height: '65%',
    borderRadius: 60,
    borderColor: '#9966ff',
    borderWidth: 3,
  },

  textImage: {
    marginTop: 5,
    fontSize: 17,
    fontWeight: '700',
    textTransform: 'capitalize',
  },

  itemRight: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  textRight: {
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  containerButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },

  containerStory: {
    width: '100%',
    height: 140,
    padding: 10,
  },

  storyItem: {
    width: 110,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginEnd: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  storyImage: {
    width: 89,
    height: 89,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#9966ff',
  },

  storyText: {
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  AddStory: {
    width: 89,
    height: 89,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#9966ff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  listMenuImage: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },

  menuTab: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  imageItem: {
    width: 137,
    height: 137,
    borderWidth: 1,
    borderColor: '#9966ff',
  },

  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
