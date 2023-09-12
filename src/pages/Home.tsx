import { useState, useEffect, useCallback } from 'react'
import './Home.css'
import PostCell from '../components/PostCell'
import { IPost } from '../types/post'
import { fetchPosts } from '../api/posts'

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = useCallback(async () => {
    try {
      const posts = await fetchPosts()
      setPosts(posts)
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <div className="Home">
      {posts.map((post) => (
        <PostCell post={post} />
      ))}
    </div>
  )
}

export default Home
