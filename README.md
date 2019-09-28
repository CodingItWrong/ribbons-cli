# Ribbons

An app for tracking Bible reading progress

## Requirements

- [Yarn](https://yarnpkg.com/en/docs/install)
- [React Native CLI](https://facebook.github.io/react-native/docs/getting-started)
- [Detox](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md)

## Installation

```bash
$ yarn install
```

Duplicate `env.example.js` to `env.js`.

## Running

Start the packager:

```bash
$ yarn start
```

Then start the app in the simulator:

```bash
$ react-native run-ios
```

## Linting

```bash
$ yarn lint
```

## Testing

End-to-end tests: first, edit `env.js` to have `apiDriver: 'fake'`. Then run:

```bash
$ detox test
```

## License

Apache-2.0
