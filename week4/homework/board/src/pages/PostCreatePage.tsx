import { useNavigate } from 'react-router'
import { useCreatePost } from '../queries/post'
import type { CreatePostRequest } from '../types/post'
import { getErrorMessage } from '../utils/error'
import PostForm from '../components/PostForm'

const PostCreatePage = () => {
  const navigate = useNavigate()
  const { mutate, isPending } = useCreatePost()

  const handleSubmit = (values: CreatePostRequest) => {
    mutate(values, {
      onSuccess: (post) => {
        alert(`${post.author}님의 게시글이 작성되었어요!`)
        navigate('/posts')
      },
      onError: (error) => {
        alert(getErrorMessage(error, '게시글 작성에 실패했습니다. 다시 시도해주세요.. '))
      },
    })
  }
  return (
    <section>
      <h1 className="mb-6 text-2xl font-bold">게시글 작성</h1>

      <PostForm
        submitText="작성"
        isPending={isPending}
        onSubmit={handleSubmit}
        cancelText="목록으로"
        onCancel={() => navigate('/posts')}
      />
    </section>
  )
}

export default PostCreatePage
