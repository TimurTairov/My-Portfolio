import { useState } from 'react'
import { Card, Container, Form, Button, CardText, CardTitle } from 'react-bootstrap'
import './Login.css'


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userData = [
    { email: 'user@mail.ru', password: 'qwerty' },
    { email: 'tim@gmail.com', password: '123' },
    { email: 'ivan@yandex.ru', password: '456' }
  ]

  function handleformsubmit(event) {
    event.preventDefault()
    const userData = {
      email: email,
      password: password,
    }
    console.log(userData)
    check(email, password)
  }

  const check = (email, password) => {
    let isUser = false
    userData.map(user => {
      if (user.email === email && user.password === password) {
        isUser = true
      }
    })
    return (isUser ? alert('OK!') : alert('Not found!'))
  }

  return (
    <Container className='auth'>
      <Card onSubmit={handleformsubmit} style={{ width: '25rem' }} className='p-3'>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Введите email...'
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: '21rem' }}
          />
          <Form.Control
            className='mt-3'
            placeholder='Введите пароль...'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            style={{ width: '21rem' }}
          />
          <Button type='submit' className='align-self-end' variant={'outline-success'}>Login</Button>
        </Form>
      </Card>

      <Card style={{ width: '25rem' }} className='mt-4 p-3'>
        <CardTitle>Users data in database</CardTitle>
        <CardText>
          {userData.map(user => {
            return (
              <div>
                Email: <b>{user.email}</b> Password: <b>{user.password} </b> <br />
              </div>
            )
          })}
        </CardText>
      </Card>
    </Container >
  )
}
export default Login
