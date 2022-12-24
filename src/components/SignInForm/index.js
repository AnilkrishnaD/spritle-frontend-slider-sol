import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'


import './index.css'


const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

const SignInForm = (props) => {
  const form = useRef();
  // console.log(props)

  const sendEmail = (e) => {
    e.preventDefault();
    const {history} = props
    

    emailjs.sendForm('service_ly45469', 'template_vw7m4no', form.current, 'ZAjFP9RsdVeq4xW-n')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });


    Cookies.set("jwtToken", bearerToken)
    history.replace('./profile')

  }

  const jwtToken = Cookies.get('jwtToken')

  if (jwtToken !== undefined) {
    return <Redirect to="/profile" />
      
  } else {

  return (
    <div  className='app-container'>
    <form ref={form} onSubmit={sendEmail} className="form-container">
      
      <label className='label'>Email</label>
      <input type="email" name="user_email" className='input'/>
      <label className='label'>Password</label>
      <input type="password" name='user-password' className='input'/>
      <input type="submit" value="Send" className='signin-button'/>
    </form>
    </div>
  )

  }
}


export default SignInForm