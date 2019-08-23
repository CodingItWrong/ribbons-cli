import React, {Component} from 'react';
import {View} from 'react-native';
import {OAuth} from '@codingitwrong/react-login';
import LoginForm from './LoginForm';
import SecondaryButton from '../SecondaryButton';
import api from '../api';
import {verticalFill} from '../styles';

class Auth extends Component {
  state = {
    loading: true,
    initiallyLoggedIn: false,
  };

  async componentDidMount() {
    const token = await api.loadToken();
    const initiallyLoggedIn = !!token;

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      loading: false,
      initiallyLoggedIn,
    });
  }

  render() {
    const {loading, initiallyLoggedIn} = this.state;
    const {children} = this.props;

    if (loading) {
      return null;
    }

    return (
      <OAuth
        initiallyLoggedIn={initiallyLoggedIn}
        httpClient={api}
        handleAccessToken={api.setToken}
        renderForm={props => <LoginForm {...props} />}
        renderLoggedIn={({logOut}) => renderLoggedIn({children, logOut})}
      />
    );
  }
}

const renderLoggedIn = ({children, logOut}) => (
  <View style={verticalFill}>
    {children}
    <SecondaryButton
      testID="logOut"
      title="Log Out"
      onPress={handleLogOut({logOut})}
    />
  </View>
);

const handleLogOut = ({logOut}) => () => api.clearToken().then(logOut);

export default Auth;
