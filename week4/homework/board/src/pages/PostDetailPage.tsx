import { Link, useNavigate, useParams } from 'react-router'
import { usePostDetail, useUpdatePost } from '../queries/post'
import { formatDate } from '../utils/date'
import { useState } from 'react'
import { getMemberCode } from '../utils/memberCode'
import { getErrorMessage } from '../utils/error'
import type { UpdatePostRequest } from '../types/post'
import PostForm from '../components/PostForm'

const PostDetailPage = () => {
  const { postId } = useParams()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)

  const { data: post, isPending, isError } = usePostDetail(Number(postId))
  const { mutate, isPending: isUpdating } = useUpdatePost(Number(postId))

  // 회원 코드가 없으면, 수정 모드로 들어가는 것 막기
  const handleEditClick = () => {
    if (!getMemberCode()) {
      alert('먼저 파트를 선택하고 코드를 발급해주세요.')
      navigate('/')
      return
    }
    setIsEditing(true)
  }

  // author는 제외하고 수정 API에는 title, content만 보냄
  const handleUpdate = ({ title, content }: UpdatePostRequest) => {
    mutate(
      { title, content },
      {
        onSuccess: () => {
          alert('게시글이 수정되었어요!')
          setIsEditing(false)
        },
        onError: (error) => {
          alert(getErrorMessage(error, '게시글 수정에 실패했습니다. 다시 시도해주세요. '))
        },
      },
    )
  }

  if (isPending) return <p>불러오는 중...</p>
  if (isError) return <p>게시글을 불러오지 못했어요.</p>
  return (
    <section>
      <Link
        to="/posts"
        className="mb-4 inline-block rounded-lg border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:border-mint hover:text-mint"
      >
        ← 목록으로
      </Link>

      {isEditing ? (
        <>
          <h1 className="mb-6 text-2xl font-bold">게시글 수정</h1>
          <PostForm
            initialValues={{ title: post.title, content: post.content }}
            showAuthor={false}
            submitText="수정"
            isPending={isUpdating}
            onSubmit={handleUpdate}
            cancelText="취소"
            onCancel={() => setIsEditing(false)}
          />
        </>
      ) : (
        <article className="rounded-xl bg-card p-6">
          <h1 className="text-xl font-bold">{post.title}</h1>
          <div className="mt-2 flex gap-2 text-sm">
            <span className="font-semibold text-mint">{post.author}</span>
            <time dateTime={post.createdAt} className="text-muted">
              {formatDate(post.createdAt)}
            </time>
          </div>
          <p className="mt-6 whitespace-pre-wrap">{post.content}</p>

          <div className="mt-6 flex justify-end gap-2 border-t border-line pt-4">
            <button
              type="button"
              onClick={handleEditClick}
              className="rounded-lg border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-mint hover:text-mint"
            >
              수정
            </button>
            {/* 삭제 기능은 다음 단계~~ */}
            <button
              type="button"
              className="rounded-lg bg-mint-strong px-4 py-2 text-sm font-semibold transition-colors hover:bg-mint hover:text-page"
            >
              삭제
            </button>
          </div>
        </article>
      )}
    </section>
  )
}
export default PostDetailPage
