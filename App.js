import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import RootNavigation from './src/containers/navigation';

const App = () => (
  <Provider store={store}>
    <RootNavigation />
  </Provider>
);

export default App;
