/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import ContainerApp from './components/ContainerApp';
import {loadCats} from './actions/userAction';

const store = configureStore();

store.dispatch(loadCats());

render(
  <Provider store={store}>
   <ContainerApp/>
  </Provider>,
  document.getElementById('app')
);