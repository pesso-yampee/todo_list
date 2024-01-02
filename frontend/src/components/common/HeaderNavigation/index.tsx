export const HeaderNavigation = () => {
  return (
    <header className="fixed top-0 left-0 w-full">
      <nav className="p-4 bg-green-600">
        <ul className="flex items-center">
          <li className="text-white font-bold text-sm">
            <a href="/login">ログイン</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}