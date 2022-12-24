import {Redirect, Route} from 'react-router-dom'
import Cookie from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookie.get('jwtToken')
  if (token === undefined) {
    return <Redirect to="/signin" />
  }
  return <Route {...props} />
}

export default ProtectedRoute