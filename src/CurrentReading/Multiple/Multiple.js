import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import PrimaryButton from '../../PrimaryButton'
import SecondaryButton from '../../SecondaryButton'
import { verticalFill } from '../../styles'

export default class Multiple extends Component {
  render() {
    const { readings, onStartBook } = this.props

    return (
      <View style={verticalFill}>
        <View style={verticalFill}>
          <FlatList
            data={readings}
            keyExtractor={reading => reading.id}
            renderItem={this.renderReading}
          />
        </View>
        <SecondaryButton title="Start Another Book" onPress={onStartBook} />
      </View>
    )
  }

  renderReading = ({ item: reading }) => {
    const { books } = this.props
    const bookId = reading.relationships.book.data.id
    const book = books.find(book => book.id === bookId)
    const bookNameForChapter =
      book.attributes.singularName || book.attributes.name

    const { furthestReadChapter } = reading.attributes
    const nextChapter = furthestReadChapter + 1

    if (reading.attributes.furthestReadChapter >= book.attributes.numChapters) {
      return this.renderCompleteReading({ reading, bookNameForChapter })
    }
    return this.renderInProgressReading({
      reading,
      bookNameForChapter,
      nextChapter,
    })
  }

  renderInProgressReading = ({ reading, bookNameForChapter, nextChapter }) => {
    return (
      <ListItem
        key={reading.id}
        title={`${bookNameForChapter} ${nextChapter}`}
        bottomDivider={true}
        rightElement={
          <PrimaryButton
            title="Read"
            onPress={() =>
              this.props.onChapterRead({ reading, chapter: nextChapter })
            }
          />
        }
      />
    )
  }

  renderCompleteReading = ({ reading, bookNameForChapter }) => {
    return (
      <ListItem
        key={reading.id}
        title={bookNameForChapter}
        bottomDivider={true}
        rightElement={
          <PrimaryButton
            title="Complete"
            onPress={() => this.props.onReadingCompleted({ reading })}
          />
        }
      />
    )
  }
}
