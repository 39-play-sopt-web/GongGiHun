import { Link, NavLink, Outlet, useNavigate } from 'react-router'
import { cn } from '../utils/cn'
import { getMemberCode, getPart, removeMemberCode } from '../utils/memberCode'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn('hover:text-mint', isActive && 'text-mint')

const Layout = () => {
  const navigate = useNavigate()
  const hasMemberCode = Boolean(getMemberCode())
  const part = getPart()

  const handleLogout = () => {
    removeMemberCode()
    navigate('/')
  }

  return (
    <>
      <header className="flex items-center justify-between border-b border-line px-6 py-4">
        <div className="flex items-center gap-2">
          <Link to="/posts" className="text-lg font-bold">
            SOPT <span className="text-mint">BOARD</span>
          </Link>
          {part && (
            <span className="rounded-full border border-mint px-2 py-0.5 text-xs font-semibold text-mint">
              {part} 파트
            </span>
          )}
        </div>

        <nav className="flex gap-6 text-sm">
          <NavLink to="/posts" end className={navLinkClass}>
            게시글 목록
          </NavLink>
          <NavLink to="/posts/new" className={navLinkClass}>
            글쓰기
          </NavLink>
          {hasMemberCode ? (
            <button type="button" onClick={handleLogout} className="hover:text-mint">
              로그아웃
            </button>
          ) : (
            <Link to="/" className="hover:text-mint">
              코드 발급
            </Link>
          )}
        </nav>
      </header>
      <main className="mx-auto max-w-3xl p-4">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
