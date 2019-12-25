import React from "react";
import {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import HomePage from './HomePage';
import AddPage from './AddPage';

export const AppRouter=()=>{
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Home" component={HomePage} />
        <Route exact path="/Delete" component={HomePage} />
        <Route path="/Add" component={AddPage}/>
        <Redirect from='/:user' to='/'/>
      </Switch>
    </Router>
  );
}

export default AppRouter;