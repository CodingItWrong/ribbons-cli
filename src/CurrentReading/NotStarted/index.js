import React, {Component} from 'react';
import {Modal, View} from 'react-native';
import NotStarted from './NotStarted';
import StartReading from '../../StartReading';
import {verticalFill, statusBarMargin} from '../../styles';

export default class NotStartedWrapper extends Component {
  state = {modalVisible: false};

  showStartABookModal = () => {
    this.setState({modalVisible: true});
  };

  handleStartReading = () => {
    this.setState({modalVisible: false});
    this.props.onReadingUpdate();
  };

  handleCancelStartReading = () => {
    this.setState({modalVisible: false});
  };

  render() {
    const {modalVisible} = this.state;

    return (
      <View style={verticalFill}>
        <Modal visible={modalVisible}>
          <View style={[statusBarMargin, verticalFill]}>
            <StartReading
              onChooseBook={this.handleStartReading}
              onCancel={this.handleCancelStartReading}
            />
          </View>
        </Modal>
        <NotStarted onStartBook={this.showStartABookModal} />
      </View>
    );
  }
}
