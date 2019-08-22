import React from 'React'
import { Button } from 'react-native'

const SecondaryButton = ({ title, onPress, ...attrs }) => (
  <Button title={title} onPress={onPress} color="#999" {...attrs} />
)

export default SecondaryButton
