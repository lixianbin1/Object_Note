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