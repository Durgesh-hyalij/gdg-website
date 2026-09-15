function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="min-h-[80vh] bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Google Developer Groups
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
            Build. Learn. Connect.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Join our college developer community to learn new technologies,
            build amazing projects, attend events and connect with fellow
            developers.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Explore Events
            </button>

            <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 hover:bg-gray-100">
              Join Our Community
            </button>
          </div>

        </div>
      </section>


      {/* About GDG Section */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">

          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              About Our Community
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              A place to learn, build and grow together.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              GDG College is a student-driven technology community where
              students come together to explore modern technologies,
              participate in workshops, build projects and share knowledge.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Whether you are just starting your development journey or
              already building projects, our community gives you a place
              to learn, collaborate and connect with other passionate
              developers.
            </p>

            <button className="mt-6 rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800">
              Learn More
            </button>
          </div>


          {/* Visual Card */}
          <div className="flex justify-center">
            <div className="flex h-80 w-full max-w-md items-center justify-center rounded-3xl bg-gray-100">
              <span className="text-6xl font-bold text-gray-300">
                GDG
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Upcoming Events Section */}
<section className="bg-gray-50 py-20">
  <div className="mx-auto max-w-7xl px-6">

    {/* Section Heading */}
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        What's Happening
      </p>

      <h2 className="mt-3 text-4xl font-bold text-gray-900">
        Upcoming Events
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-600">
        Join workshops, hackathons, talks and other exciting
        technology events organized by our community.
      </p>
    </div>


    {/* Event Cards */}
    <div className="mt-12 grid gap-8 md:grid-cols-3">

      {/* Event 1 */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex h-48 items-center justify-center bg-gray-200">
          <span className="text-2xl font-bold text-gray-400">
            Event Image
          </span>
        </div>

        <div className="p-6">
          <p className="text-sm font-semibold text-blue-600">
            September 20, 2026
          </p>

          <h3 className="mt-2 text-xl font-bold text-gray-900">
            Web Development Workshop
          </h3>

          <p className="mt-3 text-gray-600">
            Learn the fundamentals of modern web development
            and build your first project.
          </p>

          <button className="mt-5 font-semibold text-blue-600 hover:text-blue-700">
            View Event →
          </button>
        </div>
      </div>


      {/* Event 2 */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex h-48 items-center justify-center bg-gray-200">
          <span className="text-2xl font-bold text-gray-400">
            Event Image
          </span>
        </div>

        <div className="p-6">
          <p className="text-sm font-semibold text-blue-600">
            October 10, 2026
          </p>

          <h3 className="mt-2 text-xl font-bold text-gray-900">
            College Hackathon
          </h3>

          <p className="mt-3 text-gray-600">
            Collaborate with fellow developers and build
            innovative solutions.
          </p>

          <button className="mt-5 font-semibold text-blue-600 hover:text-blue-700">
            View Event →
          </button>
        </div>
      </div>


      {/* Event 3 */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex h-48 items-center justify-center bg-gray-200">
          <span className="text-2xl font-bold text-gray-400">
            Event Image
          </span>
        </div>

        <div className="p-6">
          <p className="text-sm font-semibold text-blue-600">
            November 5, 2026
          </p>

          <h3 className="mt-2 text-xl font-bold text-gray-900">
            AI & Machine Learning Workshop
          </h3>

          <p className="mt-3 text-gray-600">
            Explore artificial intelligence and learn how
            modern AI applications are built.
          </p>

          <button className="mt-5 font-semibold text-blue-600 hover:text-blue-700">
            View Event →
          </button>
        </div>
      </div>

    </div>

  </div>
</section>

{/* Why Join GDG Section */}
<section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-6">

    {/* Section Heading */}
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Why GDG?
      </p>

      <h2 className="mt-3 text-4xl font-bold text-gray-900">
        Learn More. Build More. Grow Together.
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-600">
        GDG gives students opportunities to learn practical skills,
        work on real projects and become part of a strong technology
        community.
      </p>
    </div>

    {/* Benefits */}
    <div className="mt-12 grid gap-8 md:grid-cols-3">

      {/* Benefit 1 */}
      <div className="rounded-2xl border border-gray-200 p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl font-bold">
          01
        </div>

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          Learn New Technologies
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Explore web development, AI, cloud computing,
          mobile development and other modern technologies.
        </p>
      </div>

      {/* Benefit 2 */}
      <div className="rounded-2xl border border-gray-200 p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl font-bold">
          02
        </div>

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          Build Real Projects
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Turn your ideas into real projects, collaborate
          with other students and gain practical experience.
        </p>
      </div>

      {/* Benefit 3 */}
      <div className="rounded-2xl border border-gray-200 p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl font-bold">
          03
        </div>

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          Connect With Developers
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Meet students, developers and technology enthusiasts
          who are interested in learning and building together.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Latest Blogs Section */}
<section className="bg-gray-50 py-20">
  <div className="mx-auto max-w-7xl px-6">

    {/* Section Heading */}
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          From Our Community
        </p>

        <h2 className="mt-3 text-4xl font-bold text-gray-900">
          Latest Blogs
        </h2>

        <p className="mt-4 max-w-2xl text-gray-600">
          Discover ideas, tutorials and experiences shared
          by members of our developer community.
        </p>
      </div>

      <button className="font-semibold text-blue-600 hover:text-blue-700">
        View All Blogs →
      </button>
    </div>


    {/* Blog Cards */}
    <div className="mt-12 grid gap-8 md:grid-cols-3">

      {/* Blog 1 */}
      <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex h-48 items-center justify-center bg-gray-200">
          <span className="text-2xl font-bold text-gray-400">
            Cover Image
          </span>
        </div>

        <div className="p-6">
          <p className="text-sm font-semibold text-blue-600">
            Web Development
          </p>

          <h3 className="mt-2 text-xl font-bold text-gray-900">
            Getting Started With Modern Web Development
          </h3>

          <p className="mt-3 text-gray-600">
            Learn the fundamentals and discover the tools
            developers use to build modern websites.
          </p>

          <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
            <span>By GDG Student</span>
            <span>Sep 2026</span>
          </div>
        </div>
      </article>


      {/* Blog 2 */}
      <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex h-48 items-center justify-center bg-gray-200">
          <span className="text-2xl font-bold text-gray-400">
            Cover Image
          </span>
        </div>

        <div className="p-6">
          <p className="text-sm font-semibold text-blue-600">
            Artificial Intelligence
          </p>

          <h3 className="mt-2 text-xl font-bold text-gray-900">
            Understanding the Basics of AI
          </h3>

          <p className="mt-3 text-gray-600">
            A beginner-friendly introduction to artificial
            intelligence and machine learning.
          </p>

          <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
            <span>By GDG Student</span>
            <span>Sep 2026</span>
          </div>
        </div>
      </article>


      {/* Blog 3 */}
      <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex h-48 items-center justify-center bg-gray-200">
          <span className="text-2xl font-bold text-gray-400">
            Cover Image
          </span>
        </div>

        <div className="p-6">
          <p className="text-sm font-semibold text-blue-600">
            Cloud
          </p>

          <h3 className="mt-2 text-xl font-bold text-gray-900">
            Why Cloud Computing Matters
          </h3>

          <p className="mt-3 text-gray-600">
            Understand how cloud platforms are changing
            the way modern applications are built.
          </p>

          <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
            <span>By GDG Student</span>
            <span>Aug 2026</span>
          </div>
        </div>
      </article>

    </div>

  </div>
</section>

{/* Community CTA Section */}
<section className="bg-gray-900 py-20 text-white">
  <div className="mx-auto max-w-4xl px-6 text-center">

    <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
      Join the Community
    </p>

    <h2 className="mt-3 text-4xl font-bold md:text-5xl">
      Ready to build something amazing?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
      Connect with passionate students, learn new technologies,
      participate in events and build your future with GDG College.
    </p>

    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
      <button className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700">
        Join Our Community
      </button>

      <button className="rounded-lg border border-gray-600 px-7 py-3 font-semibold text-white hover:bg-gray-800">
        Explore Events
      </button>
    </div>

  </div>
</section>

    </div>
  )
}





















export default Home