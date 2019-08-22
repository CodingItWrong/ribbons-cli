import React from 'react';
import Layout from './src/Layout';
import CurrentReading from './src/CurrentReading';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

class App extends React.Component {
  render() {
    return (
      <Layout>
        <CurrentReading />
      </Layout>
    );
  }
}

// export default from './storybook'
export default App;
