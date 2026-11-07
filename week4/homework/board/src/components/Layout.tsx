import { Link, NavLink, Outlet } from 'react-router'
import { cn } from '../utils/cn'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn('hover:text-mint', isActive && 'text-mint')

const Layout = () => {
  return (
    <>
      <header className="flex items-center justify-between border-b border-line px-6 py-4">
        <Link to="/" className="text-lg font-bold">
          SOPT <span className="text-mint">BOARD</span>
        </Link>
        <nav className="flex gap-6 text-sm">
          <NavLink to="/" end className={navLinkClass}>
            게시글 목록
          </NavLink>
          <NavLink to="/posts/new" className={navLinkClass}>
            글쓰기
          </NavLink>
        </nav>
      </header>
      <main className="mx-auto max-w-3xl p-4">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
