import Reactotron from 'reactotron-react-native';
import React, {Component} from 'react';
import {Linking, TouchableHighlight, View} from 'react-native';
import {Text} from 'react-native-elements';
import PrimaryButton from '../../PrimaryButton';
import SecondaryButton from '../../SecondaryButton';
import {centered} from '../../styles';

class InProgress extends Component {
  render() {
    const {readings, books, onChapterRead} = this.props;
    Reactotron.log({readings, books});

    const reading = readings[0];
    const bookId = reading.relationships.book.data.id;
    const book = books.find(testBook => testBook.id === bookId);

    const {furthestReadChapter} = reading.attributes;
    const nextChapter = furthestReadChapter + 1;

    const markNextChapterRead = () =>
      onChapterRead({
        reading,
        chapter: nextChapter,
      });

    const readNextChapterInBrowser = readInBrowser({
      book,
      chapter: nextChapter,
    });

    const bookNameForChapter =
      book.attributes.singularName || book.attributes.name;

    return (
      <View>
        <Text style={centered}>Next up to read:</Text>
        <TouchableHighlight
          onPress={readNextChapterInBrowser}
          underlayColor="#eeeeee">
          <View>
            <Text h2 style={centered}>
              {bookNameForChapter}
            </Text>
            <Text h1 testID="currentChapter" style={centered}>
              {nextChapter}
            </Text>
          </View>
        </TouchableHighlight>
        {this.renderNextChapterButton({markNextChapterRead})}
        {this.renderErrorMessage()}
        {this.renderStartButton()}
      </View>
    );
  }

  renderNextChapterButton = ({markNextChapterRead}) =>
    this.props.saving ? (
      <PrimaryButton title="Saving…" disabled={true} />
    ) : (
      <PrimaryButton
        testID="markChapterRead"
        title="Mark Chapter Read"
        onPress={markNextChapterRead}
      />
    );

  renderStartButton = () => (
    <SecondaryButton
      title="Start Another Book"
      onPress={this.props.onStartBook}
    />
  );

  renderErrorMessage = () => {
    if (this.props.error) {
      return <Text style={centered}>Could not connect to server</Text>;
    }
  };
}

const readInBrowser = ({book, chapter}) => () => {
  const bookName = book.attributes.name;
  const chapterSlug = `${bookName}${chapter}`.replace(' ', '');
  const url = `https://biblia.com/books/esv/${chapterSlug}`;
  Linking.openURL(url);
};

export default InProgress;
