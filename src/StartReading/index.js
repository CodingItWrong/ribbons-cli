import Reactotron from 'reactotron-react-native';
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import StartReading from './StartReading';
import bookStore from '../store/bookStore';
import readingStore from '../store/readingStore';

class StartReadingWrapper extends Component {
  componentDidMount() {
    return this.initialLoad();
  }

  initialLoad = async () => {
    try {
      await bookStore.loadAll();
    } catch (e) {
      Reactotron.error(e);
    }
  };

  render() {
    const books = bookStore
      .all()
      .slice()
      .sort((a, b) => a.id - b.id);

    return (
      <StartReading
        loading={bookStore.loading}
        error={bookStore.error}
        books={books}
        onStartReading={this.startReading}
        onCancel={this.props.onCancel}
      />
    );
  }

  startReading = book => {
    readingStore
      .create({
        relationships: {
          book: {
            data: {
              type: 'books',
              id: book.id,
            },
          },
        },
      })
      .then(this.props.onChooseBook);
  };
}

export default observer(StartReadingWrapper);
