import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout'
import PostListPage from './pages/PostListPage'
import MemberCodePage from './pages/MemberCodePage'
import PostCreatePage from './pages/PostCreatePage'
import PostDetailPage from './pages/PostDetailPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <PostListPage /> },
      { path: 'member-code', element: <MemberCodePage /> },
      { path: 'posts/new', element: <PostCreatePage /> },
      { path: 'posts/:postId', element: <PostDetailPage /> },
    ],
  },
])
