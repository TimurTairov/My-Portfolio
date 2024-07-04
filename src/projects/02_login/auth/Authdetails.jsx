import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import '../Login.css'

const Authdetails = () => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log('success!'))
      .catch((e) => console.log(e))
  }

  return (
    <div>
      {authUser ? (
        <div className="d-flex flex-column">
          <h6 className="mt-4">{`Signed in as ${authUser.email}`}</h6>
          <button className="login-button" onClick={userSignOut}>
            Sign Out
          </button>
        </div>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  )
}

export default Authdetails
