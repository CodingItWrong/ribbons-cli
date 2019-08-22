import axios from 'axios';
import {AsyncStorage} from 'react-native';

const isProd = false; // need to make this dynamic

const tokenStorageKey = 'bible-reading:token';
const baseURL = isProd
  ? 'https://api.biblereading.need-bee.com'
  : 'http://localhost:3000';

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
