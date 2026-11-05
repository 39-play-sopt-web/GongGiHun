export interface PostDetail {
  id: number
  title: string
  content: string
  author: string
  createdAt: string
  updatedAt: string
}

export interface PostListResponse {
  posts: PostDetail[]
  nextCursor: number | null
  hasNext: boolean
}

export type PostListParams = {
  keyword?: string
  cursor?: number
  size?: number
}
