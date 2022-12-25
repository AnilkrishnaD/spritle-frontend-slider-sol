import {Component} from 'react'
import './index.css'

class LogIn extends Component {
    state = {isLoggedIn: false}

    onToggleLogin = () => {
        this.setState(prevState => ({isLoggedIn: ! prevState.isLoggedIn}))
    }

    render() {
        const {isLoggedIn} = this.state

        const headingText = isLoggedIn ? 'Hello user Welcome' : 'Please Login'
        const buttonText = isLoggedIn ? 'Logout' : 'Login'


        return (
            <div className='app-container'> 
                <h1 className='welcome-heading'>{headingText}</h1>
                <button className='button' type="button" onClick={this.onToggleLogin}>{buttonText}</button>
            </div>
        )
    }

}

export default LogIn