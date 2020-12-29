import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import styles from './ChatScreen.style.js';
import socketio from 'socket.io-client';

const socket = socketio.connect('http://192.168.56.1:3000');
class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messages: [],
    };
  }

  componentDidMount() {
    socket.on('messages', (data) => {
      this.setState({
        messages: [...this.state.messages, data.messages],
      });
    });
  }

  _renderItem = (data) => {
    if (data.item.text) {
      if (data.item.user.userName == this.props.userName) {
        return (
          <View style={styles.contentContainer2}>
            <View>
              <Text style={styles.text}>{data.item.text}</Text>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.contentContainer}>
            <View>
              <Text style={styles.text}>{data.item.text}</Text>
            </View>
          </View>
        );
      }
    } else {
      return null;
    }
  };

  _sendMessage = () => {
    socket.emit('messages', {
      message: this.state.message,
      userName: this.props.userName,
    });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={this.state.messages}
          renderItem={this._renderItem}
          keyExtractor={(item) => item._id}
        />
        <View style={styles.messageContainer}>
          <View style={{flex: 1}}>
            <TextInput
              style={styles.textInput}
              placeholder="Message"
              onChangeText={(text) => {
                this.setState({message: text});
              }}
              value={this.state.message}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._sendMessage()}>
            <Text style={styles.text}> `&gt;`</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ChatScreen;
