import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import './common/common.css';
import Home from './component/Home/Home';
import Add from './component/Add/Add'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<HashRouter>
      <Switch>
      	<Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Add" component={Add}/>
        <Redirect from='/:user' to='/'/>
      </Switch>
    </HashRouter>,
	document.getElementById('root')
);

// serviceWorker.unregister();
