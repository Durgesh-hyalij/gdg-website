import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          GDG College
        </Link>

        {/* Navigation */}
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>

          <Link to="/events" className="hover:text-blue-600">
            Events
          </Link>

          <Link to="/blogs" className="hover:text-blue-600">
            Blogs
          </Link>

          <Link to="/team" className="hover:text-blue-600">
            Team
          </Link>

          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Login */}
        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
          Login
        </button>

      </div>
    </nav>
  )
}

export default Navbar