import books from './mocks/books';

let readingStarted = false;
let readingCompleted = false;
let furthestReadChapter = 0;

const response = data =>
  Promise.resolve({
    data: {
      data,
    },
  });

const reading = () => ({
  id: '1',
  type: 'readings',
  attributes: {
    furthestReadChapter,
  },
  relationships: {
    book: {
      data: {
        id: '8',
        type: 'books',
      },
    },
  },
});

const api = {
  get(url) {
    console.log({url});

    if (url.match(/^books/)) {
      return response(books);
    } else if (url.match(/^reading/)) {
      if (readingStarted && !readingCompleted) {
        return response([reading()]);
      } else {
        return response([]);
      }
    } else if (url.match(/^chapterCompletions/)) {
      return response([]);
    }
  },

  post(url) {
    console.log({url});

    if (url.match(/^\/oauth\/token/)) {
      return Promise.resolve({
        data: {
          access_token: 'access_token',
        },
      });
    } else if (url.match(/^readings/)) {
      readingStarted = true;
      return response(reading());
    } else if (url.match(/^chapterCompletions/)) {
      furthestReadChapter += 1;
      return response({
        id: '1',
        type: 'chapterCompletions',
      });
    }
  },

  patch(url) {
    console.log({url});

    readingCompleted = true;
    return response(reading());
  },

  loadToken: () => {},
  setToken: () => {},
  clearToken: () => Promise.resolve(),
};

export default api;
