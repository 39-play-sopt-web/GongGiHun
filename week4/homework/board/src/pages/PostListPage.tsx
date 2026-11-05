import PostCard from '../components/PostCard'
import { usePostList } from '../queries/post'
import { useEffect, useRef } from 'react'

const PostListPage = () => {
  // PostListPage → usePostList → useInfiniteQuery → getPostList → 서버
  const { data, isPending, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = usePostList()

  const observeTarget = useRef<HTMLDivElement>(null)

  // useEffect는 화면이 그려진 뒤 실행되므로, 이때 ref에서 div를 꺼낼 수 있음!
  useEffect(() => {
    const target = observeTarget.current
    if (!target) return

    // 다음 페이지 요청
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage()
      }
    })
    observer.observe(target)
    // 값이 바뀌거나 페이지를 벗어날 때 이전 감시 정리
    return () => observer.disconnect()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  if (isPending) return <p>불러오는 중...</p>
  if (isError) return <p>게시글 목록을 불러오지 못했어요.</p>

  //flatMap으로 data.pages를 펼치기.
  // data.pages
  //[{ posts: [글1, 글2], ... }, { posts: [글3, 글4], ... }]

  // posts
  //[글1, 글2, 글3, 글4]

  const posts = data.pages.flatMap((page) => page.posts)

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">게시글 목록</h1>

      {posts.length === 0 ? (
        <p>게시글이 없어요. </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}

      {isFetchingNextPage && <p className="mt-4 text-center text-sm">불러오는 중..........</p>}
      {/* 렌더링 후 observeTarget.current에 이 div가 들어감 */}
      <div ref={observeTarget} className="h-10" />
    </section>
  )
}

export default PostListPage
