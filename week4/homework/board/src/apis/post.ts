import { instance } from './instance'
import type { ApiResponse } from '../types/api'
import type { PostDetail, PostListParams, PostListResponse } from '../types/post'

export const getPostDetail = async (postId: number) => {
  const response = await instance.get(`posts/${postId}`).json<ApiResponse<PostDetail>>()
  return response.data
}

export const getPostList = async (params: PostListParams) => {
  const response = await instance
    .get('posts', { searchParams: params })
    .json<ApiResponse<PostListResponse>>()
  return response.data
}
