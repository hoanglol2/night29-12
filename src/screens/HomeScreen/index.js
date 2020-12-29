import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './HomeScreen.style.js';
import socketio from 'socket.io-client';
import {ATOM} from '../../assets/images';

const socket = socketio.connect('http://192.168.56.1:3000');

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  _joinChat = (navigation) => {
    if (this.state.userName.length < 3) {
      alert('Độ dài tối thiểu là 3');
    } else {
      socket.emit('messages', {userName: this.state.userName});
      navigation.navigate('Chat');
    }
  };

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.userNameContainer}>
          <Image style={styles.image} source={ATOM} />
          <TextInput
            style={styles.textInput}
            placeholder=""
            onChangeText={(text) => this.setState({userName: text})}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._joinChat(navigation)}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default HomeScreen;
