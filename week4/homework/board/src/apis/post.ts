import { instance } from './instance'
import type { ApiResponse } from '../types/api'
import type {
  CreatePostRequest,
  PostDetail,
  PostListParams,
  PostListResponse,
  UpdatePostRequest,
} from '../types/post'

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

export const createPost = async (body: CreatePostRequest) => {
  const response = await instance.post('posts', { json: body }).json<ApiResponse<PostDetail>>()
  return response.data
}

export const updatePost = async (postId: number, body: UpdatePostRequest) => {
  const response = await instance
    .put(`posts/${postId}`, { json: body })
    .json<ApiResponse<PostDetail>>()
  return response.data
}

export const deletePost = async (postId: number) => {
  await instance.delete(`posts/${postId}`)
}
