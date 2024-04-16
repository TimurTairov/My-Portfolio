import { useState, useEffect } from 'react'
import Post from './Post'
import './Posts.css'


const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function Posts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isloading, setIsloading] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL)
        const posts = await res.json()
        setPosts(posts)
      } catch (error) {
        setError(error.message)
      }
      setIsloading(false)
    }
    fetchData()
  }, [])

  if (error) {
    return <h4 className='error'>Error: {error}</h4>
  }


  return (
    <>
      <h4>Posts from </h4> <a href={API_URL} target="_blank" rel="noreferrer">{API_URL}</a>

      {
        isloading ? (<div className="loading">Loading...</div>)
          :
          (

            posts.map((post) => { return <Post key={post.id} {...post} /> })
          )
      }

    </>
  )
}
export default Posts
