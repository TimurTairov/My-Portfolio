import React from 'react'
import './UserCard.css'

const UserCard = ({ name, username, address, email, phone, website, company }) => {
  // let userAdress = JSON.parse(address)
  console.log(address)
  return (
    <div className='user-card'>
      <h3 className='user-card__tittle'>User card</h3>
      <b>Username:</b> {username} <br />
      <b>Name:</b> {name} <br />
      <b>Email:</b> {email} <br />
      <b>Adress:</b> {address.zipcode}, {address.city}, {address.street}, {address.suite} <br />
      <b>Phone:</b> {phone} <br />
      <b>Website:</b> {website} <br />
      <b>Company:</b> {company.name}
    </div>
  )
}

export default UserCard