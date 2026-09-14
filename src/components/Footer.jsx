function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">

          {/* About */}
          <div>
            <h2 className="text-xl font-bold">
              GDG College
            </h2>

            <p className="mt-3 text-gray-400">
              A community of students passionate about
              technology, development and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">
              Quick Links
            </h3>

            <div className="mt-3 flex flex-col gap-2 text-gray-400">
              <a href="/about" className="hover:text-white">
                About
              </a>

              <a href="/events" className="hover:text-white">
                Events
              </a>

              <a href="/blogs" className="hover:text-white">
                Blogs
              </a>

              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">
              Connect With Us
            </h3>

            <p className="mt-3 text-gray-400">
              Follow GDG College for upcoming events,
              workshops and announcements.
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © 2026 GDG College. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer