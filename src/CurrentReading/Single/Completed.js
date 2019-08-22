import React, {Component} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import PrimaryButton from '../../PrimaryButton';
import {centered} from '../../styles';

class Completed extends Component {
  render() {
    const {readings, books} = this.props;

    const reading = readings[0];
    const bookId = reading.relationships.book.data.id;
    const book = books.find(book => book.id === bookId);

    return (
      <View>
        <Text style={centered}>You finished</Text>
        <Text h2 testID="completedBookName" style={centered}>
          {book.attributes.name}
        </Text>
        {this.renderButton({book, reading})}
        {this.renderErrorMessage()}
      </View>
    );
  }

  renderButton = ({book, reading}) =>
    this.props.saving ? (
      <PrimaryButton title="Saving…" disabled={true} />
    ) : (
      <PrimaryButton
        testID="markBookComplete"
        title={`Mark ${book.attributes.name} Completed`}
        onPress={() => this.props.onReadingCompleted({reading})}
      />
    );

  renderErrorMessage = () => {
    if (this.props.error) {
      return <Text style={centered}>Could not connect to server</Text>;
    }
  };
}

export default Completed;
