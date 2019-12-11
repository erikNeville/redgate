import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import {theme} from './theme';
import {ThemeProvider} from 'styled-components';
import thunk from 'redux-thunk';
import {getFirestore, createFirestoreInstance} from 'redux-firestore';
import {getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

const store = createStore(
  rootReducer,
);

const rrfProps = {
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
