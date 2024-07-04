//import { useState } from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import './Login.css'
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn'
import Authdetails from './auth/Authdetails'
import { useState } from 'react'

const Login = () => {
  const [login, SetLogin] = useState(false)

  const handleLogin = () => {
    SetLogin(!login)
  }

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-row justify-content-center align-items-center">
        {login ? (
          <>
            <h5>Do you have an account?</h5>
            <Button onClick={handleLogin} variant={'outline-success'}>
              Login an account
            </Button>
          </>
        ) : (
          <>
            <h5>Don't have an account?</h5>
            <Button
              onClick={handleLogin}
              variant={'outline-success'}
              // className="login-button"
            >
              Create an account
            </Button>
          </>
        )}
      </div>

      <Card className="myCard d-flex flex-column justify-content-center align-items-center my-4">
        {login ? <SignUp /> : <SignIn />}
      </Card>

      <Card className="myCard d-flex flex-column justify-content-center align-items-center my-4">
        <Authdetails />
      </Card>
    </Container>
  )
}
export default Login
