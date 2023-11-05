import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Project from '../pages/Project'
import Contacts from '../pages/Contacts'



const AppRouter = () => {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<Project />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter