import { createBrowserRouter, redirect } from 'react-router'
import Layout from './components/Layout'
import PostListPage from './pages/PostListPage'
import MemberCodePage from './pages/MemberCodePage'
import PostCreatePage from './pages/PostCreatePage'
import PostDetailPage from './pages/PostDetailPage'
import { checkMemberCode } from './utils/memberCode'

const requireMemberCode = () => {
  if (!checkMemberCode()) {
    return redirect(`/`)
  }
  return null
}

export const router = createBrowserRouter([
  { path: '/', element: <MemberCodePage /> },
  {
    path: '/posts',
    element: <Layout />,
    children: [
      { index: true, element: <PostListPage /> },
      { path: 'new', element: <PostCreatePage />, loader: requireMemberCode },
      { path: ':postId', element: <PostDetailPage /> },
    ],
  },
])
