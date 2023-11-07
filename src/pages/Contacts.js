import React from 'react'
import { Container, Card } from 'react-bootstrap'
import '../styles/Contacts.css'

const Contacts = () => {
  return (
    <Container className="contacts-container">
      <Card className='contacts-container mt-4 myContacts'>
        <div>
          <h1 className="tittle">Contacts</h1>
        </div>
        <div>
          <ul>
            <li>
              <h2>Location</h2>
              <p>Moscow, Russia</p>
            </li>
            <li>
              <h2>WhatsApp</h2>
              <p>
                <a href="tel:+79672067710">+7 (967) 206-77-10</a>
              </p>
            </li>
            <li>
              <h2>Telegram</h2>
              <p>
                <a href="https://t.me/tirthadeva"
                  target="_blank"
                  rel="noreferrer"
                >
                  @tirthadeva
                </a>
              </p>
            </li>
            <li>
              <h2>VK</h2>
              <p>
                <a href="https://vk.com/tirthadeva"
                  target="_blank"
                  rel="noreferrer"
                >
                  @tirthadeva
                </a>
              </p>
            </li>
            <li>
              <h2>GitHub</h2>
              <p>
                <a href="https://github.com/TimurTairov?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  My GitHub
                </a>
              </p>
            </li>
            <li>
              <h2>Email</h2>
              <p>
                <a href="mailto:tairovtk@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >tairovtk@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
      </Card>
    </Container>
  )
}

export default Contacts
