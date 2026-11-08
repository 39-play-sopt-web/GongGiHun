import { createBrowserRouter, redirect } from 'react-router'
import Layout from './components/Layout'
import PostListPage from './pages/PostListPage'
import MemberCodePage from './pages/MemberCodePage'
import PostCreatePage from './pages/PostCreatePage'
import PostDetailPage from './pages/PostDetailPage'
import { getMemberCode } from './utils/memberCode'

const requireMemberCode = () => {
  if (!getMemberCode()) {
    alert('먼저 파트를 선택하고 코드를 발급해주세요. ')
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
