export const queryKeys = {
  posts: {
    list: (keyword?: string) => ['posts', 'list', keyword] as const,
    detail: (postId: number) => ['posts', 'detail', postId] as const,
  },
}
