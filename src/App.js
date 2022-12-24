import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import SignInForm from './components/SignInForm'
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import GameView from './components/GameView'



import './App.css'


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/signin" component={SignInForm}/>
      <ProtectedRoute exact path="/profile" component={Profile} />
      <Route path="/codingquestion" component={GameView} />
      <Redirect to="/signin" />
    </Switch>
  </BrowserRouter>
)

export default App
