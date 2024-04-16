import { Container } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'

const MyFooter = () => {
  return (
    <footer className="my-footer">
      <Container className="footer-container">
        <div className="container-item">
          <a
            href="https://github.com/TimurTairov/my-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="icon" />
            GitHub
          </a>
        </div>
        <div className="container-item">
          <p className="container-item">© All Rights Reserved 2023™</p>
        </div>
      </Container>
    </footer>
  )
}

export default MyFooter
