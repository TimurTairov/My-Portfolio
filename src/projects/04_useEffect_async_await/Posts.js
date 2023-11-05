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
    return <h1>Error: {error}</h1>
  }



  return (
    <>
      <h4>Posts <hr /> </h4>
      from {API_URL}
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
