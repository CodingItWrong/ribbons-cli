const books = [
  {
    id: '1',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/1',
    },
    attributes: {
      name: 'Genesis',
      singularName: null,
      numChapters: 50,
      lastReadAt: '2018-12-26T21:12:18.112Z',
    },
  },
  {
    id: '2',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/2',
    },
    attributes: {
      name: 'Exodus',
      singularName: null,
      numChapters: 40,
      lastReadAt: null,
    },
  },
  {
    id: '3',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/3',
    },
    attributes: {
      name: 'Leviticus',
      singularName: null,
      numChapters: 27,
      lastReadAt: null,
    },
  },
  {
    id: '4',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/4',
    },
    attributes: {
      name: 'Numbers',
      singularName: null,
      numChapters: 36,
      lastReadAt: '2018-12-30T12:56:14.657Z',
    },
  },
  {
    id: '5',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/5',
    },
    attributes: {
      name: 'Deuteronomy',
      singularName: null,
      numChapters: 34,
      lastReadAt: null,
    },
  },
  {
    id: '6',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/6',
    },
    attributes: {
      name: 'Joshua',
      singularName: null,
      numChapters: 24,
      lastReadAt: null,
    },
  },
  {
    id: '7',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/7',
    },
    attributes: {
      name: 'Judges',
      singularName: null,
      numChapters: 21,
      lastReadAt: null,
    },
  },
  {
    id: '8',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/8',
    },
    attributes: {
      name: 'Ruth',
      singularName: null,
      numChapters: 4,
      lastReadAt: '2019-01-02T14:09:50.021Z',
    },
  },
  {
    id: '9',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/9',
    },
    attributes: {
      name: '1 Samuel',
      singularName: null,
      numChapters: 31,
      lastReadAt: null,
    },
  },
  {
    id: '10',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/10',
    },
    attributes: {
      name: '2 Samuel',
      singularName: null,
      numChapters: 24,
      lastReadAt: null,
    },
  },
  {
    id: '11',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/11',
    },
    attributes: {
      name: '1 Kings',
      singularName: null,
      numChapters: 22,
      lastReadAt: null,
    },
  },
  {
    id: '12',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/12',
    },
    attributes: {
      name: '2 Kings',
      singularName: null,
      numChapters: 25,
      lastReadAt: null,
    },
  },
  {
    id: '13',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/13',
    },
    attributes: {
      name: '1 Chronicles',
      singularName: null,
      numChapters: 29,
      lastReadAt: null,
    },
  },
  {
    id: '14',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/14',
    },
    attributes: {
      name: '2 Chronicles',
      singularName: null,
      numChapters: 36,
      lastReadAt: null,
    },
  },
  {
    id: '15',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/15',
    },
    attributes: {
      name: 'Ezra',
      singularName: null,
      numChapters: 10,
      lastReadAt: null,
    },
  },
  {
    id: '16',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/16',
    },
    attributes: {
      name: 'Nehemiah',
      singularName: null,
      numChapters: 13,
      lastReadAt: null,
    },
  },
  {
    id: '17',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/17',
    },
    attributes: {
      name: 'Esther',
      singularName: null,
      numChapters: 10,
      lastReadAt: null,
    },
  },
  {
    id: '18',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/18',
    },
    attributes: {
      name: 'Job',
      singularName: null,
      numChapters: 42,
      lastReadAt: null,
    },
  },
  {
    id: '19',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/19',
    },
    attributes: {
      name: 'Psalms',
      singularName: 'Psalm',
      numChapters: 150,
      lastReadAt: null,
    },
  },
  {
    id: '20',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/20',
    },
    attributes: {
      name: 'Proverbs',
      singularName: null,
      numChapters: 31,
      lastReadAt: null,
    },
  },
  {
    id: '21',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/21',
    },
    attributes: {
      name: 'Ecclesiastes',
      singularName: null,
      numChapters: 12,
      lastReadAt: null,
    },
  },
  {
    id: '22',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/22',
    },
    attributes: {
      name: 'Song of Solomon',
      singularName: null,
      numChapters: 8,
      lastReadAt: null,
    },
  },
  {
    id: '23',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/23',
    },
    attributes: {
      name: 'Isaiah',
      singularName: null,
      numChapters: 66,
      lastReadAt: null,
    },
  },
  {
    id: '24',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/24',
    },
    attributes: {
      name: 'Jeremiah',
      singularName: null,
      numChapters: 52,
      lastReadAt: null,
    },
  },
  {
    id: '25',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/25',
    },
    attributes: {
      name: 'Lamentations',
      singularName: null,
      numChapters: 5,
      lastReadAt: null,
    },
  },
  {
    id: '26',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/26',
    },
    attributes: {
      name: 'Ezekiel',
      singularName: null,
      numChapters: 48,
      lastReadAt: null,
    },
  },
  {
    id: '27',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/27',
    },
    attributes: {
      name: 'Daniel',
      singularName: null,
      numChapters: 12,
      lastReadAt: null,
    },
  },
  {
    id: '28',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/28',
    },
    attributes: {
      name: 'Hosea',
      singularName: null,
      numChapters: 14,
      lastReadAt: null,
    },
  },
  {
    id: '29',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/29',
    },
    attributes: {
      name: 'Joel',
      singularName: null,
      numChapters: 3,
      lastReadAt: null,
    },
  },
  {
    id: '30',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/30',
    },
    attributes: {
      name: 'Amos',
      singularName: null,
      numChapters: 9,
      lastReadAt: null,
    },
  },
  {
    id: '31',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/31',
    },
    attributes: {
      name: 'Obadiah',
      singularName: null,
      numChapters: 1,
      lastReadAt: null,
    },
  },
  {
    id: '32',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/32',
    },
    attributes: {
      name: 'Jonah',
      singularName: null,
      numChapters: 4,
      lastReadAt: null,
    },
  },
  {
    id: '33',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/33',
    },
    attributes: {
      name: 'Micah',
      singularName: null,
      numChapters: 7,
      lastReadAt: null,
    },
  },
  {
    id: '34',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/34',
    },
    attributes: {
      name: 'Nahum',
      singularName: null,
      numChapters: 3,
      lastReadAt: null,
    },
  },
  {
    id: '35',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/35',
    },
    attributes: {
      name: 'Habakkuk',
      singularName: null,
      numChapters: 3,
      lastReadAt: null,
    },
  },
  {
    id: '36',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/36',
    },
    attributes: {
      name: 'Zephaniah',
      singularName: null,
      numChapters: 3,
      lastReadAt: null,
    },
  },
  {
    id: '37',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/37',
    },
    attributes: {
      name: 'Haggai',
      singularName: null,
      numChapters: 2,
      lastReadAt: null,
    },
  },
  {
    id: '38',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/38',
    },
    attributes: {
      name: 'Zechariah',
      singularName: null,
      numChapters: 14,
      lastReadAt: null,
    },
  },
  {
    id: '39',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/39',
    },
    attributes: {
      name: 'Malachi',
      singularName: null,
      numChapters: 4,
      lastReadAt: null,
    },
  },
  {
    id: '40',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/40',
    },
    attributes: {
      name: 'Matthew',
      singularName: null,
      numChapters: 28,
      lastReadAt: null,
    },
  },
  {
    id: '41',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/41',
    },
    attributes: {
      name: 'Mark',
      singularName: null,
      numChapters: 16,
      lastReadAt: null,
    },
  },
  {
    id: '42',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/42',
    },
    attributes: {
      name: 'Luke',
      singularName: null,
      numChapters: 24,
      lastReadAt: null,
    },
  },
  {
    id: '43',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/43',
    },
    attributes: {
      name: 'John',
      singularName: null,
      numChapters: 21,
      lastReadAt: null,
    },
  },
  {
    id: '44',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/44',
    },
    attributes: {
      name: 'Acts',
      singularName: null,
      numChapters: 28,
      lastReadAt: null,
    },
  },
  {
    id: '45',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/45',
    },
    attributes: {
      name: 'Romans',
      singularName: null,
      numChapters: 16,
      lastReadAt: null,
    },
  },
  {
    id: '46',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/46',
    },
    attributes: {
      name: '1 Corinthians',
      singularName: null,
      numChapters: 16,
      lastReadAt: null,
    },
  },
  {
    id: '47',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/47',
    },
    attributes: {
      name: '2 Corinthians',
      singularName: null,
      numChapters: 13,
      lastReadAt: null,
    },
  },
  {
    id: '48',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/48',
    },
    attributes: {
      name: 'Galatians',
      singularName: null,
      numChapters: 6,
      lastReadAt: null,
    },
  },
  {
    id: '49',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/49',
    },
    attributes: {
      name: 'Ephesians',
      singularName: null,
      numChapters: 6,
      lastReadAt: null,
    },
  },
  {
    id: '50',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/50',
    },
    attributes: {
      name: 'Philippians',
      singularName: null,
      numChapters: 4,
      lastReadAt: null,
    },
  },
  {
    id: '51',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/51',
    },
    attributes: {
      name: 'Colossians',
      singularName: null,
      numChapters: 4,
      lastReadAt: null,
    },
  },
  {
    id: '52',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/52',
    },
    attributes: {
      name: '1 Thessalonians',
      singularName: null,
      numChapters: 5,
      lastReadAt: null,
    },
  },
  {
    id: '53',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/53',
    },
    attributes: {
      name: '2 Thessalonians',
      singularName: null,
      numChapters: 3,
      lastReadAt: null,
    },
  },
  {
    id: '54',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/54',
    },
    attributes: {
      name: '1 Timothy',
      singularName: null,
      numChapters: 6,
      lastReadAt: null,
    },
  },
  {
    id: '55',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/55',
    },
    attributes: {
      name: '2 Timothy',
      singularName: null,
      numChapters: 4,
      lastReadAt: null,
    },
  },
  {
    id: '56',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/56',
    },
    attributes: {
      name: 'Titus',
      singularName: null,
      numChapters: 3,
      lastReadAt: null,
    },
  },
  {
    id: '57',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/57',
    },
    attributes: {
      name: 'Philemon',
      singularName: null,
      numChapters: 1,
      lastReadAt: null,
    },
  },
  {
    id: '58',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/58',
    },
    attributes: {
      name: 'Hebrews',
      singularName: null,
      numChapters: 13,
      lastReadAt: null,
    },
  },
  {
    id: '59',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/59',
    },
    attributes: {
      name: 'James',
      singularName: null,
      numChapters: 5,
      lastReadAt: null,
    },
  },
  {
    id: '60',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/60',
    },
    attributes: {
      name: '1 Peter',
      singularName: null,
      numChapters: 5,
      lastReadAt: null,
    },
  },
  {
    id: '61',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/61',
    },
    attributes: {
      name: '2 Peter',
      singularName: null,
      numChapters: 3,
      lastReadAt: null,
    },
  },
  {
    id: '62',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/62',
    },
    attributes: {
      name: '1 John',
      singularName: null,
      numChapters: 5,
      lastReadAt: null,
    },
  },
  {
    id: '63',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/63',
    },
    attributes: {
      name: '2 John',
      singularName: null,
      numChapters: 1,
      lastReadAt: null,
    },
  },
  {
    id: '64',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/64',
    },
    attributes: {
      name: '3 John',
      singularName: null,
      numChapters: 1,
      lastReadAt: null,
    },
  },
  {
    id: '65',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/65',
    },
    attributes: {
      name: 'Jude',
      singularName: null,
      numChapters: 1,
      lastReadAt: null,
    },
  },
  {
    id: '66',
    type: 'books',
    links: {
      self: 'http://localhost:3000/books/66',
    },
    attributes: {
      name: 'Revelation',
      singularName: null,
      numChapters: 22,
      lastReadAt: null,
    },
  },
];

export default books;
