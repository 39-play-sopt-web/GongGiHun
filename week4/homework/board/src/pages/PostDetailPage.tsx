import { useParams } from 'react-router'
import { usePostDetail } from '../queries/post'
import { formatDate } from '../utils/date'

const PostDetailPage = () => {
  const { postId } = useParams()
  const { data: post, isPending, isError } = usePostDetail(Number(postId))

  if (isPending) return <p>불러오는 중...</p>
  if (isError) return <p>게시글을 불러오지 못했어요.</p>
  return (
    <article>
      <h1 className="text-2xl font-bold">{post.title} </h1>
      <div className="mt-2 flex gap-2 text-sm text-gray-500">
        <span> {post.author}</span>
        <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
      </div>
      <p className="mt-4 whitespace-pre-wrap">{post.content}</p>
    </article>
  )
}
export default PostDetailPage
