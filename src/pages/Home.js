import React from 'react'
import { Container, Image } from 'react-bootstrap'
import myPhoto from '../images/myphoto.jpg'
import { TbBrandJavascript } from "react-icons/tb"
import { BsDatabaseFill } from "react-icons/bs"
import '../styles/Home.css'

const Home = () => {
  return (
    <Container className="flex-container">
      <div className="flex-img mt-4">
        <Image src={myPhoto} className="home-img" />
      </div>
      <header className="flex-header mt-4">
        <h1 className="header__title">
          <strong>
            Hi, my name is <b className='my-name'>Timur Tairov</b>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
      </header>
      <main className="flex-main mt-4">
        <h2 className='home-tittle'> <TbBrandJavascript />Frontend</h2>
        <p>
          JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM,
          React-BootStrap, MaterialUI, Yarn, TailwindCSS
        </p>
        <h2 className='home-tittle'> <BsDatabaseFill />Backend</h2>
        <p>NodeJS, PostgreSQL, Express, Dotenv</p>
      </main>
    </Container>
  )
}

export default Home
