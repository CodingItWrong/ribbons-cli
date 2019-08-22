import React from 'react';
import {Text, View} from 'react-native';

const Error = ({style: styleProp, message}) =>
  message ? (
    <View style={[styles.container, styleProp]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  ) : null;

const colors = {
  darkRed: '#600',
  lightRed: '#FCC',
};

const styles = {
  container: {
    backgroundColor: colors.lightRed,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.darkRed,
    padding: 8,
  },
  text: {
    color: colors.darkRed,
  },
};

export default Error;
