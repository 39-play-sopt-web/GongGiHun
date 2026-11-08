import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useIssueMemberCode } from '../queries/member'
import type { Part } from '../types/member'
import { getErrorMessage } from '../utils/error'
import Dropdown from '../components/Dropdown'

const PARTS: Part[] = ['WEB', 'iOS', 'ANDROID']

const MemberCodePage = () => {
  const navigate = useNavigate()
  const [part, setPart] = useState<Part | ''>('')
  const { mutate, isPending, isError, error } = useIssueMemberCode()

  const handleIssue = () => {
    if (!part) return
    mutate({ part }, { onSuccess: () => navigate('/posts') })
  }

  return (
    <section className="mx-auto mt-24 max-w-sm">
      <h1 className="text-2xl font-bold">회원 코드 발급</h1>
      <p className="mt-2 text-sm text-muted">파트를 선택하면 코드가 발급됩니다.</p>

      <div className="mt-6 flex gap-2">
        <Dropdown
          label="파트 선택"
          options={PARTS}
          value={part}
          placeholder="파트를 선택하세요"
          onChange={setPart}
        />
        <button
          type="button"
          onClick={handleIssue}
          disabled={!part || isPending}
          className="rounded-lg bg-mint-strong px-4 font-semibold text-page transition-colors enabled:hover:bg-mint disabled:opacity-50"
        >
          {isPending ? '발급 중...' : '코드 발급받기'}
        </button>
      </div>

      {isError && (
        <p role="alert" className="mt-2 text-sm text-red-400">
          {getErrorMessage(error, '코드 발급에 실패했어요. 다시 시도해주세요. ')}
        </p>
      )}

      <Link
        to="/posts"
        className="mt-3 block rounded-lg border border-line p-3 text-center text-sm hover:border-mint"
      >
        게시판 목록 보기
      </Link>
    </section>
  )
}

export default MemberCodePage
