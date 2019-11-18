import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import './static/css/common.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

if(module.hot) {
  module.hot.accept(); 
}

serviceWorker.unregister();