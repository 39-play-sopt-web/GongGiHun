import { useState, type SubmitEvent } from 'react'
import { POST_MAX_LENGTH } from '../constants/post'
import type { CreatePostRequest } from '../types/post'
import { cn } from '../utils/cn'

interface PostFormProps {
  initialValues?: Partial<CreatePostRequest>
  showAuthor?: boolean
  submitText: string
  isPending: boolean
  onSubmit: (values: CreatePostRequest) => void
  cancelText: string
  onCancel: () => void
}

const fieldClass =
  'w-full rounded-lg border border-line bg-card px-4 py-3 outline-none focus:border-mint'

const PostForm = ({
  initialValues,
  showAuthor = true,
  submitText,
  isPending,
  onSubmit,
  cancelText,
  onCancel,
}: PostFormProps) => {
  const [title, setTitle] = useState(initialValues?.title ?? '')
  const [content, setContent] = useState(initialValues?.content ?? '')
  const [author, setAuthor] = useState(initialValues?.author ?? '')

  // 글자 수 초과 여부
  const isTitleOver = title.length > POST_MAX_LENGTH.TITLE
  const isContentOver = content.length > POST_MAX_LENGTH.CONTENT
  const isAuthorOver = author.length > POST_MAX_LENGTH.AUTHOR

  // 비어 있거나(공백만 포함) 초과했거나 요청 중이면 버튼 비활성화
  const isEmpty = !title.trim() || !content.trim() || (showAuthor && !author.trim())
  const isOver = isTitleOver || isContentOver || (showAuthor && isAuthorOver)

  const isDisabled = isEmpty || isOver || isPending

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isDisabled) return
    onSubmit({ title: title.trim(), content: content.trim(), author: author.trim() })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <label htmlFor="title" className="font-semibold">
            제목
          </label>
          <span className={cn('text-muted', isTitleOver && 'text-red-400')}>
            {title.length} / {POST_MAX_LENGTH.TITLE}
          </span>
        </div>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요"
          className={cn(fieldClass, isTitleOver && 'border-red-400 focus:border-red-400')}
        />
        {isTitleOver && (
          <p role="alert" className="text-sm text-red-400">
            제목은 {POST_MAX_LENGTH.TITLE}자 이하로 입력해주시면 좋겠습니다..
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <label htmlFor="content" className="font-semibold">
            내용
          </label>
          <span className={cn('text-muted', isContentOver && 'text-red-400')}>
            {content.length} / {POST_MAX_LENGTH.CONTENT}
          </span>
        </div>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력해주세요"
          rows={10}
          className={cn(
            fieldClass,
            'resize-none',
            isContentOver && 'border-red-400 focus:border-red-400',
          )}
        />
        {isContentOver && (
          <p role="alert" className="text-sm text-red-400">
            내용은 {POST_MAX_LENGTH.CONTENT}자 이하로 입력해주시면 좋겠습니다..
          </p>
        )}
      </div>

      {showAuthor && (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <label htmlFor="author" className="font-semibold">
              작성자
            </label>
            <span className={cn('text-muted', isAuthorOver && 'text-red-400')}>
              {author.length} / {POST_MAX_LENGTH.AUTHOR}
            </span>
          </div>
          <input
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="작성자를 입력해주세요"
            className={cn(fieldClass, isAuthorOver && 'border-red-400 focus:border-red-400')}
          />
          {isAuthorOver && (
            <p role="alert" className="text-sm text-red-400">
              작성자는 {POST_MAX_LENGTH.AUTHOR}자 이하로 입력해주시면 좋겠습니다..
            </p>
          )}
        </div>
      )}

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-line px-6 py-3 font-semibold text-muted transition-colors hover:border-mint hover:text-mint"
        >
          {cancelText}
        </button>
        <button
          type="submit"
          disabled={isDisabled}
          className="rounded-lg bg-mint-strong px-6 py-3 font-semibold transition-colors enabled:hover:bg-mint enabled:hover:text-page disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isPending ? `${submitText} 중...` : submitText}
        </button>
      </div>
    </form>
  )
}

export default PostForm
