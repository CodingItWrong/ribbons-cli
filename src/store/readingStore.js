import {ResourceStore} from '@reststate/mobx';
import api from '../api';

const readingStore = new ResourceStore({
  name: 'readings',
  httpClient: api,
});

export default readingStore;
