import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    objectFix: 'cover',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    // textAlign: "center",
  },

  top: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  bottom: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  titleStart: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textTitle: {
    fontSize: 40,
    fontWeight: '500',
    color: 'white',
  },

  textTitle1: {
    fontSize: 24,
    marginTop: 10,
    color: 'white',
  },

  bodyInput: {
    marginTop: 60,
  },
  textInput: {
    width: 380,
    borderWidth: 2,
    borderColor: 'white',
    height: 70,
    padding: 20,
    fontSize: 25,
    borderRadius: 15,
    color: 'white',
    marginBottom: 10,
    backgroundColor: 'grey',
    opacity: 0.7,
  },

  buttonCustom: {
    height: 300,
  },

  button: {
    height: 70,
    width: 380,
    backgroundColor: 'green',
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#75A3E3',
    opacity: 0.9,
  },
  textButton: {
    fontSize: 25,
    color: 'white',
  },

  orderElse: {
    width: 380,
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textLoginElse: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  orderElse1: {
    width: 380,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
