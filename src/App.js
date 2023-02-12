import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'

import NotFound from './components/NotFound'
import MasterLoginForm from './components/MasterLoginForm'
import MasterPage from './components/MasterPage'
import MasterCreateAccount from './components/MasterCreateAccount'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/master-login" component={MasterLoginForm} />
    <Route exact path="/master-signup" component={MasterCreateAccount} />
    <Route exact path="/master-page" component={MasterPage} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
