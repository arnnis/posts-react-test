import { useState, useEffect } from 'react'
import './Home.css'
import PostCell from '../components/PostCell'
import { IPost } from '../types/post'

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const posts = await res.json()
      setPosts(posts)
    } catch (err) {
        console.log(err)
    }
  }

  return (
    <div className="Home">
      {posts.map((post) => (
        <PostCell post={post} />
      ))}
    </div>
  )
}

export default Home
