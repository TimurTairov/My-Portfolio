import React from 'react'
import { Container, Image } from 'react-bootstrap'
import myPhoto from '../images/myphoto.jpg'
import { TbBrandJavascript } from 'react-icons/tb'
import { BsDatabaseFill } from 'react-icons/bs'

const Home = () => {
  return (
    <Container className="home-page">
      <div className="flex-img mt-4">
        <Image src={myPhoto} className="home-img" />
      </div>
      <header className="flex-header mt-4">
        <h1>
          <strong>
            Hi, my name is <b className="my-name">Timur Tairov</b>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
      </header>
      <main className="flex-main mt-4">
        <h2 className="title">
          {' '}
          <TbBrandJavascript className="mb-2" />
          Frontend
        </h2>
        <p>
          HTML, CSS, JavaScript, ReactJS, NPM, React-BootStrap, MaterialUI,
          TailwindCSS, TypeScript, Redux
        </p>
        <h2 className="title">
          <BsDatabaseFill className="mb-2" />
          Backend
        </h2>
        <p>NodeJS, MySQL, PostgreSQL, Express, FireBase</p>
      </main>
    </Container>
  )
}

export default Home
