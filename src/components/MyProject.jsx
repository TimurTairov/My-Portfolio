import React from 'react'
import { Card } from 'react-bootstrap'
import { FcFolder } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const MyProject = ({ tittle, text, skills, index }) => {
  return (
    <Card style={{ width: '25rem' }} className="mb-4">
      <Card.Body>
        <FcFolder style={{ fontSize: '5rem' }} />
        <Card.Title>{tittle}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Text>Skills: {skills}</Card.Text>
        <Link to={`/project/${index}`}>See more ...</Link>
      </Card.Body>
    </Card>
  )
}

export default MyProject
