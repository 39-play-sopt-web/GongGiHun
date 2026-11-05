import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getPostDetail, getPostList } from '../apis/post'
import { queryKeys } from './queryKeys'

export const usePostDetail = (postId: number) => {
  return useQuery({
    queryKey: queryKeys.posts.detail(postId),
    queryFn: () => getPostDetail(postId),
  })
}

export const usePostList = (keyword?: string) => {
  return useInfiniteQuery({
    queryKey: queryKeys.posts.list(keyword),
    queryFn: ({ pageParam }) => getPostList({ keyword, cursor: pageParam }),
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? (lastPage.nextCursor ?? undefined) : undefined,
  })
}
