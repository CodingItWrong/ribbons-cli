import Reactotron from 'reactotron-react-native';
import React, {Component} from 'react';
import {parseISO, formatDistance} from 'date-fns';
import {FlatList, View} from 'react-native';
import {ListItem, Text} from 'react-native-elements';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';
import {centered, verticalFill} from '../styles';

export default class StartReading extends Component {
  render() {
    return (
      <View style={verticalFill}>
        <Text h1 style={centered}>
          Start a Book
        </Text>
        <SecondaryButton title="Cancel" onPress={this.props.onCancel} />
        {this.renderList()}
      </View>
    );
  }

  renderList = () => {
    if (this.props.loading) {
      return <Text style={centered}>Loading…</Text>;
    }

    if (this.props.error) {
      return (
        <View>
          <Text style={centered}>Could not connect to server</Text>
          <PrimaryButton onPress={this.initialLoad} title="Try Again" />
        </View>
      );
    }

    return (
      <FlatList
        data={this.props.books}
        keyExtractor={item => item.id}
        renderItem={this.renderBook}
      />
    );
  };

  renderBook = ({item: book}) => (
    <ListItem
      title={book.attributes.name}
      subtitle={this.lastReadLabel({book})}
      onPress={() => this.props.onStartReading(book)}
      bottomDivider={true}
    />
  );

  lastReadLabel = ({book}) => {
    const {lastReadAt} = book.attributes;

    if (lastReadAt) {
      const formattedDate = formatDistance(parseISO(lastReadAt), new Date());
      return `Last read ${formattedDate} ago`;
    } else {
      return null;
    }
  };
}
