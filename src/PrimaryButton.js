import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';

const PrimaryButton = ({title, onPress, disabled = false, ...attrs}) => (
  <View style={style}>
    <Button
      large
      raised
      rounded
      buttonStyle={buttonStyle}
      title={title}
      onPress={onPress}
      disabled={disabled}
      {...attrs}
    />
  </View>
);

const style = {
  marginBottom: 20,
  marginLeft: 10,
  marginRight: 10,
  marginTop: 20,
};

const buttonStyle = {
  backgroundColor: '#099',
  height: 50,
};

export default PrimaryButton;
