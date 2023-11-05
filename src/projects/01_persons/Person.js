import './Persons.css'

function Person(props) {
  const { firstName, lastName, email, img } = props
  return (
    <div className="person-card">
      <img src={img} alt='card' />
      <h5>
        {firstName} {lastName}
      </h5>
      <p>{email}</p>
    </div>
  )
}
export default Person
