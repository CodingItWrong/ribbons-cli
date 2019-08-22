import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const tokenStorageKey = 'bible-reading:token';
const baseURL = __DEV__
  ? 'http://localhost:3000'
  : 'https://api.biblereading.need-bee.com';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/vnd.api+json',
  },
});

api.loadToken = () => {
  return AsyncStorage.getItem(tokenStorageKey).then(token => {
    setAuthHeader(token);
    return token;
  });
};

api.setToken = token => {
  setAuthHeader(token);

  return AsyncStorage.setItem(tokenStorageKey, token);
};

api.clearToken = () => {
  setAuthHeader(null);

  return AsyncStorage.removeItem(tokenStorageKey);
};

function setAuthHeader(token) {
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.Authorization;
  }
}

export default api;
