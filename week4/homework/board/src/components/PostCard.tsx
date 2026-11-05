import { Link } from 'react-router'
import type { PostDetail } from '../types/post'
import { formatDate } from '../utils/date'

interface PostCardProps {
  post: PostDetail
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link to={`/posts/${post.id}`} className="rounded=lg hover: block border bg-gray-50 p-4">
      <h2 className="truncate text-lg font-bold">{post.title}</h2>
      <p className="mt-1 line-clamp-2 text-sm text-gray-600">{post.content}</p>
      <div className="mt-3 flex justify-between text-xs text-gray-500">
        <span>{post.author}</span>
        <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
      </div>{' '}
    </Link>
  )
}

export default PostCard
