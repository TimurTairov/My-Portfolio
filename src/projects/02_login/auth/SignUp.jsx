import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase'
import '../Login.css'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [copyPassword, setCopyPassword] = useState('')
  const [error, setError] = useState('')

  const register = (e) => {
    e.preventDefault()

    if (copyPassword !== password) {
      setError("Passwords didn't match!")
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user)
        setError('')
        setEmail('')
        setPassword('')
        setCopyPassword('')
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <h2 className="mt-2">Create an account</h2>
      <form onSubmit={register} className="d-flex flex-column">
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
        <input
          placeholder="Enter your password again"
          value={copyPassword}
          onChange={(e) => setCopyPassword(e.target.value)}
          type="password"
        />
        <button className="login-button">Create </button>
        {error ? <p style={{ color: 'red' }}>{error}</p> : ''}
      </form>
    </div>
  )
}

export default SignUp
