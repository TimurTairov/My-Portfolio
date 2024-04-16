import { lazy } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

//import Home from '../pages/Home'
//import Projects from '../pages/Projects'
//import Project from '../pages/Project'
//import Contacts from '../pages/Contacts'
//import Links from '../pages/Links'

const Home = lazy(() => import('../pages/Home'))
const Projects = lazy(() => import('../pages/Projects'))
const Project = lazy(() => import('../pages/Project'))
const Contacts = lazy(() => import('../pages/Contacts'))
const Links = lazy(() => import('../pages/Links'))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:id" element={<Project />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="links" element={<Links />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
