import { useParams } from 'react-router'
import { usePostDetail } from '../queries/post'

const PostDetailPage = () => {
  const { postId } = useParams()
  const { data: post, isPending, isError } = usePostDetail(Number(postId))

  if (isPending) return <p>불러오는 중...</p>
  if (isError) return <p>게시글을 불러오지 못했어요.</p>
  return (
    <article>
      <h1 className="font bold text-2xl">{post.title} </h1>
      <p className="text-sm text-gray-500">{post.author}</p>
      <p className="mt-4 whitespace-pre-wrap">{post.content}</p>
    </article>
  )
}
export default PostDetailPage
