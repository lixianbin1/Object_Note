import React from 'react'
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import AddNote from './AddNote/AddNote'
import NoteHome from './NoteHome/NoteHome'

const App=(props)=>(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={NoteHome} />
      <Route exact path="/Home" component={NoteHome} />
      <Route exact path="/Add" component={AddNote}/>
      <Redirect from='/:user' to='/'/>
    </Switch>
  </HashRouter>
)

export default App

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
// import './common/common.css';
// import Home from './component/Home/Home';
// import Add from './component/Add/Add'
// // import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//  <HashRouter>
//       <Switch>
//        <Route exact path="/" component={Home} />
//         <Route exact path="/Home" component={Home} />
//         <Route exact path="/Add" component={Add}/>
//         <Redirect from='/:user' to='/'/>
//       </Switch>
//     </HashRouter>,
//  document.getElementById('root')
// );