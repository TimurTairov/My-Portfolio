import React from 'react'
import { Card } from 'react-bootstrap'
import { FcFolder } from "react-icons/fc"
import '../styles/MyProject.css'

const MyProject = ({ tittle, text, skills, index }) => {
  return (
    <Card style={{ width: '25rem' }} className='mb-4'>
      <Card.Body>
        <FcFolder className='folderIcon' />
        <Card.Title>{tittle}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Text>Skills: {skills}</Card.Text>
        <Card.Link href={`/project/${index}`}>See more </Card.Link>
      </Card.Body>
    </Card>
  )
}

export default MyProject