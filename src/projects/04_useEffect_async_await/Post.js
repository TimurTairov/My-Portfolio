import './Post.css'
function Post(props) {
  const { userId, id, title, body } = props
  return (
    <div className="post">
      <h2 className='text-center'>{title}</h2>
      <p>Body: {body}</p>
      <hr />
      <p>User Id: {userId} </p>
      <p className='text-center'>{id}</p>

    </div>
  )
}
export default Post
