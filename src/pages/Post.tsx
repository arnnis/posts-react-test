import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Post.css'
import { IPost } from '../types/post'
import { API_URL } from '../env'
import { fetchPost } from '../api/posts'

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState<IPost | undefined>()

  useEffect(() => {
    getPost()
  }, [])

  const getPost = useCallback(async () => {
    try {
      const post = await fetchPost(id)
      setPost(post)
    } catch (err) {
      console.log(err)
    }
  }, [id])

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
