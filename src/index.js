import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import FetchMock from 'react-fetch-mock';
import registerServiceWorker from './registerServiceWorker';

window.Fetch = new FetchMock(require('./__mocks__')).fetch

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
