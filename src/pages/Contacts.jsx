import React from 'react'
import { Container, Card } from 'react-bootstrap'

const Contacts = () => {
  return (
    <Container className="contacts-page">
      <div>
        <h1 className="title">Contacts</h1>
      </div>

      <Card className="contacts-page">
        <h5>Location</h5>
        <p>Moscow, Russia</p>
      </Card>

      <Card className="contacts-page">
        <h5>WhatsApp</h5>
        <p>
          <a href="whatsapp://send?phone=79672067710">+7 (967) 206-77-10</a>
        </p>
      </Card>

      <Card className="contacts-page">
        <h5>Telegram</h5>
        <p>
          <a href="https://t.me/tirthadeva" target="_blank" rel="noreferrer">
            @tirthadeva
          </a>
        </p>
      </Card>

      <Card className="contacts-page">
        <h5>VK</h5>
        <p>
          <a href="https://vk.com/tirthadeva" target="_blank" rel="noreferrer">
            @tirthadeva
          </a>
        </p>
      </Card>

      <Card className="contacts-page">
        <h5>GitHub</h5>
        <p>
          <a
            href="https://github.com/TimurTairov?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            My GitHub
          </a>
        </p>
      </Card>

      <Card className="contacts-page">
        <h5>Email</h5>
        <p>
          <a href="mailto:tairovtk@gmail.com" target="_blank" rel="noreferrer">
            tairovtk@gmail.com
          </a>
        </p>
      </Card>
    </Container>
  )
}

export default Contacts
