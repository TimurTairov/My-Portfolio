import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import UserCard from './UserCard'
import './UserCard.css'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  const [showData, setShowdata] = useState(false)

  const click = () => {
    setShowdata(!showData)
  }

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((error) => { setError(error.message) })
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }

  // console.log('App rendered')
  // console.log(users)
  return (
    <>
      <h4>User cards from</h4>
      <a href={API_URL} target="_blank" rel="noreferrer">{API_URL}</a>

      <div style={{ textAlign: 'center' }}>
        <Button onClick={click} variant={'outline-success'}>Show data</Button>
      </div>
      <div className='card-list'>
        <div className='card-container'>
          {showData ?
            users.map(user => { return <UserCard key={user.id} {...user} /> })
            :
            null
          }
        </div>
      </div>
    </>
  )
}

export default UserList