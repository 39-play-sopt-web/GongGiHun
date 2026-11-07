import { useState, type SubmitEvent, type ChangeEvent } from 'react'

interface SearchBarProps {
  keyword?: string
  onSearch: (keyword: string) => void
}

const SearchBar = ({ keyword = '', onSearch }: SearchBarProps) => {
  const [value, setValue] = useState(keyword)
  const [error, setError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value
    setValue(nextValue)
    setError('')

    if (!nextValue.trim()) onSearch('')
  }
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (trimmed.length === 1) {
      setError('검색어는 2자 이상 입력하셈')
      return
    }
    setError('')
    onSearch(trimmed)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2">
        <input
          type="search"
          value={value}
          onChange={handleChange}
          maxLength={50}
          placeholder="제목으로 검색"
          aria-label="게시글 제목 검색"
          className="min-w-0 flex-1 rounded-lg border border-line bg-card p-3 outline-none focus:border-mint"
        />
        <button
          type="submit"
          disabled={!value.trim()}
          className="rounded-lg bg-mint-strong px-5 font-semibold text-page disabled:opacity-50"
        >
          검색
        </button>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </form>
  )
}
export default SearchBar
