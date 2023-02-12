import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import MasterLoginForm from './components/MasterLoginForm'
import StudentLoginForm from './components/StudentLoginForm'
import MasterPage from './components/MasterPage'
import StudentPage from './components/StudentPage'
import MasterCreateAccount from './components/MasterCreateAccount'
import StudentCreateAccount from './components/StudentCreateAccount'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/master-login" component={MasterLoginForm} />
    <Route exact path="/master-signup" component={MasterCreateAccount} />
    <Route exact path="/master-page" component={MasterPage} />
    <Route exact path="/student-login" component={StudentLoginForm} />
    <Route exact path="/student-signup" component={StudentCreateAccount} />
    <Route exact path="/student-page" component={StudentPage} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
