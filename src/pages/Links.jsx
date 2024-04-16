import React from 'react'
import { Container, Card } from 'react-bootstrap'

const Links = () => {
  return (
    <Container className="links-page">
      <div>
        <h1 className="title">References to my works</h1>
      </div>

      <Card className="my-site d-flex flex-column justify-content-center align-items-center">
        <h5>My yoga site</h5>
        <a href="http://tirthadeva.ru" target="_blank" rel="noreferrer">
          tirthadeva.ru
        </a>
        <p>
          <b>Skills:</b> HTML, js, react, react-bootstrap, react-router-dom,
          react-icons, lazy load components, uploaded by Versel.com
        </p>
      </Card>

      <Card className="my-site d-flex flex-column justify-content-center align-items-center">
        <h5>Moscow dharma center ShaktiMa</h5>
        <a href="http://shaktima.ru" target="_blank" rel="noreferrer">
          shaktima.ru
        </a>
        <p>
          <b>Skills:</b> HTML, js, react, tailwind css, react-router-dom,
          react-icons, lazy load components, uploaded by Versel.com
        </p>
      </Card>
    </Container>
  )
}

export default Links
