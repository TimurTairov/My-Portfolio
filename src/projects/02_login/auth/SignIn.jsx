import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase'
import '../Login.css'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const logIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user)
        setError('')
        setEmail('')
        setPassword('')
      })
      .catch(
        (error) => console.log(error),
        setError("Sorry, could'd find your account!")
      )
  }

  return (
    <div>
      <h2 className="mt-2">Log In</h2>
      <form className="d-flex flex-column">
        <input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button className="login-button" onClick={logIn}>
          LogIn
        </button>
        {error ? <p style={{ color: 'red' }}>{error}</p> : ''}
      </form>
    </div>
  )
}

export default SignIn
