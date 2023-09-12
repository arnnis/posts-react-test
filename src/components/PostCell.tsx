import { Link } from 'react-router-dom'
import './PostCell.css'
import { IPost } from '../types/post'
import { FC } from 'react'

interface Props {
  post: IPost
}

const PostCell: FC<Props> = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`}>
      <div className="post">
        <span className="title">{post.title}</span>
      </div>
    </Link>
  )
}

export default PostCell
