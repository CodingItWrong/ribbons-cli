import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import Auth from './Auth'
import { centered, verticalFill, statusBarMargin } from './styles'

const Layout = ({ children }) => (
  <View style={[verticalFill, statusBarMargin]}>
    <Text h1 style={centered}>
      Ribbons
    </Text>
    <View style={verticalFill}>
      <Auth>{children}</Auth>
    </View>
  </View>
)

export default Layout
