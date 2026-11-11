import { useSearchParams } from 'react-router'
import PostCard from '../components/PostCard'
import { usePostList } from '../queries/post'
import { useEffect, useRef } from 'react'
import SearchBar from '../components/SearchBar'

const PostListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') ?? undefined

  // PostListPage → usePostList → useInfiniteQuery → getPostList → 서버
  const { data, isPending, isError, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePostList(keyword)

  const observeTarget = useRef<HTMLDivElement>(null)

  // useEffect는 화면이 그려진 뒤 실행되므로, 이때 ref에서 div를 꺼낼 수 있음!
  useEffect(() => {
    const target = observeTarget.current
    if (!target) return

    // 다음 페이지 요청
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage && !isError) {
        fetchNextPage()
      }
    })
    observer.observe(target)
    // 값이 바뀌거나 페이지를 벗어날 때 이전 감시 정리
    return () => observer.disconnect()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, isError])

  const handleSearch = (nextKeyword: string) => {
    setSearchParams(nextKeyword ? { keyword: nextKeyword } : {})
  }
  //flatMap으로 data.pages를 펼치기.
  // data.pages
  //[{ posts: [글1, 글2], ... }, { posts: [글3, 글4], ... }]

  // posts
  //[글1, 글2, 글3, 글4]

  const posts = data?.pages.flatMap((page) => page.posts) ?? []

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">게시글 목록</h1>
      <SearchBar key={keyword} keyword={keyword} onSearch={handleSearch} />

      {isPending && <p role="status">불러오는 중......</p>}
      {isError && <p>게시글 목록을 불러오지 못했어요..</p>}
      {isSuccess && posts.length === 0 && <p>게시글이 없어요.</p>}

      <ul className="flex flex-col gap-3">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>

      {isFetchingNextPage && (
        <p role="status" className="mt-4 text-center text-sm">
          불러오는 중..........
        </p>
      )}
      {/* 렌더링 후 observeTarget.current에 이 div가 들어감 */}
      <div ref={observeTarget} className="h-10" />
    </section>
  )
}

export default PostListPage
