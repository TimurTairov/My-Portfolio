import { Container } from "react-bootstrap"
import { AiFillGithub } from "react-icons/ai"
import '../styles/MyFooter.css'


const MyFooter = () => {
  return (
    <footer className="my-footer">
      <Container className="footer-container">
        <div className="container-item">
          <a href="#"> <AiFillGithub className="icon" /> GitHub</a>
        </div>
        <div className="container-item">
          <p className="container-item">© All Rights Reserved 2023™</p>
        </div>
      </Container >
    </footer>
  )
}

export default MyFooter