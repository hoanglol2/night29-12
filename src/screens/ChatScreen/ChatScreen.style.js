import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 32,
    padding: 15,
    width: '100%',
    marginTop: 10,
  },
  button: {
    padding: 15,
    backgroundColor: '#56c7e3',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    marginTop: 15,
    marginLeft: 10,
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
  contentContainer: {
    borderRadius: 12,
    backgroundColor: 'red',
    padding: 15,
    marginTop: 10,
    width: '70%',
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  contentContainer2: {
    borderRadius: 12,
    backgroundColor: '#56c7e3',
    padding: 15,
    marginTop: 10,
    width: '70%',
    marginRight: 10,
    alignSelf: 'flex-end',
  },
});
