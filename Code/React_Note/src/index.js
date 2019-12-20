import React,{useReducer} from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import AppRouter from './container/AppRouter';
import * as serviceWorker from './common/serviceWorker';

ReactDOM.render(<AppRouter />,document.getElementById('root'));
// unregister() or register();
serviceWorker.unregister();
