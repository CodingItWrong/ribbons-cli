import { ResourceStore } from '@reststate/mobx'
import api from '../api'

const chapterCompletionStore = new ResourceStore({
  name: 'chapterCompletions',
  httpClient: api,
})

export default chapterCompletionStore
