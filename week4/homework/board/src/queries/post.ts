import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createPost, deletePost, getPostDetail, getPostList, updatePost } from '../apis/post'
import { queryKeys } from './queryKeys'
import type { UpdatePostRequest } from '../types/post'

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

export const useCreatePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.posts.lists() })
    },
  })
}

export const useUpdatePost = (postId: number) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (body: UpdatePostRequest) => updatePost(postId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.posts.lists() })
      queryClient.invalidateQueries({ queryKey: queryKeys.posts.detail(postId) })
    },
  })
}

export const useDeletePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.posts.lists() })
    },
  })
}
