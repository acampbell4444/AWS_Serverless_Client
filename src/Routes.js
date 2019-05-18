import React 									              from 'react'	
import { BrowserRouter, Route, Switch } 		from 'react-router-dom'
import Home 									              from './containers/Home'
import App										              from './App'
import Signup 									            from './containers/Signup'
import Login 									              from './containers/Login'
import NewNote 									            from './containers/NewNote'
import NotFound 								            from './containers/NotFound'

const Root = () => (
  <BrowserRouter>
    <App />
	<Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/login' exact component={Login} />
      <Route path='/signup' exact component={Signup} />
      <Route path='/notes/new' exact component={NewNote} />
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
 )

export default Root
