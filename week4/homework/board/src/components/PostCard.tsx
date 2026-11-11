import { Link } from 'react-router'
import type { PostDetail } from '../types/post'
import { formatDate } from '../utils/date'

interface PostCardProps {
  post: PostDetail
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link
      to={`/posts/${post.id}`}
      className="block rounded-xl border border-transparent bg-card p-5 transition hover:border-mint"
    >
      <h2 className="truncate text-lg font-bold">{post.title}</h2>
      <p className="mt-1 line-clamp-2 text-sm text-muted">{post.content}</p>
      <div className="mt-3 flex gap-3 text-xs">
        <span className="font-semibold text-mint">{post.author}</span>
        <time dateTime={post.createdAt} className="text-muted">
          {formatDate(post.createdAt)}
        </time>
      </div>
    </Link>
  )
}

export default PostCard
