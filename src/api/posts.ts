import { API_URL } from '../env'

export const fetchPost = async (id: string) => {
  const res = await fetch(`${API_URL}/posts/${id}`)
  const post = await res.json()
  return post
}

export const fetchPosts = async () => {
  const res = await fetch(`${API_URL}/posts`)
  const posts = await res.json()
  return posts
}
