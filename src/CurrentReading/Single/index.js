import Reactotron from 'reactotron-react-native';
import React, {Component} from 'react';
import {Modal, View} from 'react-native';
import {observer} from 'mobx-react';
import bookStore from '../../store/bookStore';
import StartReading from '../../StartReading';
import InProgress from './InProgress';
import Completed from './Completed';
import {verticallyCentered, statusBarMargin} from '../../styles';
import chapterCompletionStore from '../../store/chapterCompletionStore';

class Single extends Component {
  state = {
    saving: false,
    error: false,
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
    const {saving, error, modalVisible} = this.state;
    const reading = readings[0];
    const {id} = reading.relationships.book.data;
    const book = bookStore.byId({id});
    Reactotron.log({id, book});

    if (reading.attributes.furthestReadChapter >= book.attributes.numChapters) {
      return (
        <View style={verticallyCentered}>
          <Completed
            readings={readings}
            books={books}
            saving={saving}
            error={error}
            onReadingCompleted={this.markReadingCompleted}
          />
        </View>
      );
    }

    return (
      <View style={verticallyCentered}>
        <Modal visible={modalVisible}>
          <View style={[statusBarMargin, {flex: 1}]}>
            <StartReading
              onChooseBook={this.handleStartReading}
              onCancel={this.handleCancelStartReading}
            />
          </View>
        </Modal>
        <InProgress
          readings={readings}
          books={books}
          saving={saving}
          error={error}
          onStartBook={this.showStartABookModal}
          onChapterRead={this.markChapterRead}
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
        Reactotron.log(error);
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
        Reactotron.log(error);
        this.setState({
          saving: false,
          error: true,
        });
      });
  };
}

export default observer(Single);
