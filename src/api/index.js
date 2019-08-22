import Reactotron from 'reactotron-react-native';
import env from '../../env';
import fake from './fake';
import remote from './remote';

let api;

const {apiDriver} = env;

setTimeout(() => {
  Reactotron.log(`apiDriver: ${apiDriver}`);
}, 0);

switch (apiDriver) {
  case 'fake':
    api = fake;
    break;
  case 'remote':
    api = remote;
    break;
}

export default api;
