import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <header className="border-b p-4">
        <Link to="/" className="font-bold">
          게시판
        </Link>
      </header>
      <main className="mx-auto max-w-3xl p-4">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
