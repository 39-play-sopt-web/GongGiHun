export const queryKeys = {
  posts: {
    lists: () => ['posts', 'list'] as const,
    list: (keyword?: string) => ['posts', 'list', keyword] as const,
    detail: (postId: number) => ['posts', 'detail', postId] as const,
  },
}
