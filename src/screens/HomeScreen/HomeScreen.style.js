import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#56c7e3',
  },
  userNameContainer: {
    alignItems: 'center',
    padding: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: 'white',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 12,
    padding: 15,
    width: '100%',
    marginTop: 15,
  },
  image: {
    width: 50,
    height: 50,
  },
  button: {
    padding: 15,
    backgroundColor: '#56c7e3',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
});
