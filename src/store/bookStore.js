import { ResourceStore } from '@reststate/mobx'
import api from '../api'

const bookStore = new ResourceStore({
  name: 'books',
  httpClient: api,
})

export default bookStore
