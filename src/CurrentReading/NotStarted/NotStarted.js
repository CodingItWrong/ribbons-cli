import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import PrimaryButton from '../../PrimaryButton';
import {verticallyCentered, centered} from '../../styles';

const NotStarted = ({onStartBook}) => (
  <View style={verticallyCentered}>
    <Text style={centered}>You aren't reading a book right now.</Text>
    <Text h2 style={centered}>
      Let's get started!
    </Text>
    <PrimaryButton
      testID="startABook"
      title="Start a Book"
      onPress={onStartBook}
    />
  </View>
);

export default NotStarted;
