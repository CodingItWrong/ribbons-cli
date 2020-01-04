import env from 'react-native-config';
import fake from './fake';
import remote from './remote';

let api;

const apiDriver = env.API_DRIVER;
console.log(`env: ${JSON.stringify(env)}`);

switch (apiDriver) {
  case 'fake':
    api = fake;
    break;
  case 'remote':
    api = remote;
    break;
}

export default api;
