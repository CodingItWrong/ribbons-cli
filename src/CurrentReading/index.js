import Reactotron from 'reactotron-react-native';
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import readingStore from '../store/readingStore';
import bookStore from '../store/bookStore';
import chapterCompletionStore from '../store/chapterCompletionStore';
import {Text, View} from 'react-native';
import PrimaryButton from '../PrimaryButton';
import NotStarted from './NotStarted';
import Single from './Single';
import Multiple from './Multiple';
import {centered, verticallyCentered, verticalFill} from '../styles';

const currentlyReading = {
  filter: {complete: false},
  options: {include: 'book'},
};

const today = {
  filter: {today: true},
};

class CurrentReading extends Component {
  state = {
    loading: false,
    error: false,
  };

  componentDidMount() {
    return this.initialLoad();
  }

  initialLoad = async () => {
    this.setState({
      loading: true,
      error: false,
    });

    try {
      await this.refreshReading();
      const readings = readingStore.where(currentlyReading);
      for (const reading of readings) {
        const {id} = reading.relationships.book.data;
        await bookStore.loadById({id});
      }

      this.setState({
        loading: false,
        error: false,
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  };

  refreshReading = () =>
    Promise.all([
      readingStore.loadWhere(currentlyReading),
      chapterCompletionStore.loadWhere(today),
    ]);

  render() {
    if (this.state.loading) {
      return (
        <View style={verticallyCentered}>
          <Text style={centered}>Loading…</Text>
        </View>
      );
    }

    if (this.state.error) {
      return (
        <View style={verticallyCentered}>
          <Text style={centered}>Could not connect to server</Text>
          <PrimaryButton onPress={this.initialLoad} title="Try Again" />
        </View>
      );
    }

    const numChaptersToday = chapterCompletionStore.where(today).length;

    return (
      <View style={verticalFill}>
        {this.renderContent()}
        <Text style={[centered, {marginTop: 20}]}>
          Chapters read today: {numChaptersToday}
        </Text>
      </View>
    );
  }

  renderContent() {
    const readings = readingStore.where(currentlyReading);
    const books = bookStore.all();

    switch (readings.length) {
      case 0:
        return <NotStarted onReadingUpdate={this.refreshReading} />;
      case 1:
        return (
          <Single
            readings={readings}
            books={books}
            onReadingUpdate={this.refreshReading}
          />
        );
      default:
        return (
          <Multiple
            readings={readings}
            books={books}
            onReadingUpdate={this.refreshReading}
          />
        );
    }
  }
}

export default observer(CurrentReading);
