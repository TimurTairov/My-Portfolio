import './Persons.css'

function Person(props) {
  const { firstName, lastName, email, img } = props
  return (
    <div className="person-card">
      <img src={img} alt='card' />
      <h6>
        {firstName} {lastName}
      </h6>
      <p>{email}</p>
    </div>
  )
}
export default Person
