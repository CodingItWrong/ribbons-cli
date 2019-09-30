import React, {Component} from 'react';
import {Modal, View} from 'react-native';
import {observer} from 'mobx-react';
import StartReading from '../../StartReading';
import Multiple from './Multiple';
import {statusBarMargin, verticalFill} from '../../styles';
import chapterCompletionStore from '../../store/chapterCompletionStore';

class MultipleWrapper extends Component {
  state = {
    modalVisible: false,
  };

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
    const {readings, books} = this.props;
    const {modalVisible} = this.state;

    return (
      <View style={verticalFill}>
        <Modal visible={modalVisible}>
          <View style={[statusBarMargin, styles.fill]}>
            <StartReading
              onChooseBook={this.handleStartReading}
              onCancel={this.handleCancelStartReading}
            />
          </View>
        </Modal>
        <Multiple
          readings={readings}
          books={books}
          onStartBook={this.showStartABookModal}
          onChapterRead={this.markChapterRead}
          onReadingCompleted={this.markReadingCompleted}
        />
      </View>
    );
  }

  markChapterRead = ({reading, chapter}) => {
    const {onReadingUpdate} = this.props;

    this.setState({
      saving: true,
      error: false,
    });

    chapterCompletionStore
      .create({
        attributes: {
          chapter,
        },
        relationships: {
          reading: {
            data: {
              type: 'readings',
              id: reading.id,
            },
          },
        },
      })
      .then(() => {
        this.setState({
          saving: false,
          error: false,
        });
        onReadingUpdate();
      })
      .catch(error => {
        console.error(error);
        this.setState({
          saving: false,
          error: true,
        });
      });
  };

  markReadingCompleted = ({reading}) => {
    const {onReadingUpdate} = this.props;

    this.setState({
      saving: true,
      error: false,
    });

    reading
      .update({
        attributes: {
          complete: true,
        },
      })
      .then(() => {
        this.setState({
          saving: false,
          error: false,
        });
        onReadingUpdate();
      })
      .catch(error => {
        console.error(error);
        this.setState({
          saving: false,
          error: true,
        });
      });
  };
}

const styles = {
  fill: {
    flex: 1,
  },
};

export default observer(MultipleWrapper);
