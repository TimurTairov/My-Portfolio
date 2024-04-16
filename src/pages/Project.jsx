import React from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../components/helpers/projectsList'
import { Container } from 'react-bootstrap'
import { AllProjectsArray } from '../projects/index'

const Project = () => {
  const { id } = useParams()
  const project = projects[id]
  const Type = AllProjectsArray[id]

  return (
    <Container className="project-page">
      <h2 className="title">{project.tittle}</h2>
      <Type />
    </Container>
  )
}

export default Project
