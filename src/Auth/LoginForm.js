import React from 'react'
import { View } from 'react-native'
import { Input } from 'react-native-elements'
import PrimaryButton from '../PrimaryButton'
import Error from '../Error'

const LoginForm = ({
  username,
  password,
  error,
  handleChange,
  handleLogIn,
}) => (
  <View>
    <Error style={styles.error} message={error} />
    <Input
      label="Email"
      testID="email"
      keyboardType="email-address"
      textContentType="username"
      value={username}
      onChangeText={handleChange('username')}
      autoCapitalize="none"
    />
    <Input
      label="Password"
      testID="password"
      textContentType="password"
      secureTextEntry={true}
      value={password}
      onChangeText={handleChange('password')}
      autoCapitalize="none"
    />
    <PrimaryButton testID="logIn" title="Log In" onPress={handleLogIn} />
  </View>
)

const styles = {
  error: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
  },
}

export default LoginForm
