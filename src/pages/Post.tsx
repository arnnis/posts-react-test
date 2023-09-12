import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Post.css'
import { IPost } from '../types/post'

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState<IPost | undefined>()

  useEffect(() => {
    getPost()
  }, [])

  const getPost = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      const post = await res.json()
      setPost(post)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="Post">
      {post ? (
        <>
          <span className="title">{post.title}</span>
          <span className="body">{post.body}</span>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  )
}

export default Post
