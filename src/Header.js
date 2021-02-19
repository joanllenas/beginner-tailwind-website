function Header() {
  return (
    <div className="container relative flex justify-between px-6 py-6 mx-auto lg:px-0">
      {/* left section */}
      <div className="flex items-center space-x-4">
        <a className="text-2xl font-bold text-teal-800" href="#link">
          Beginner Tailwind
        </a>
        <a className="hidden hover:text-gray-900 lg:inline-block" href="#link">
          About
        </a>
        <a className="hidden hover:text-gray-900 lg:inline-block" href="#link">
          What you'll Learn
        </a>
        <a className="hidden hover:text-gray-900 lg:inline-block" href="#link">
          Pricing
        </a>
        <a className="hidden hover:text-gray-900 lg:inline-block" href="#link">
          FAQ
        </a>
      </div>

      {/* right section */}
      <div className="flex items-center space-x-4">
        <a href="#login">Login</a>
        <a
          className="hidden p-3 text-purple-700 transition duration-500 bg-purple-300 rounded shadow lg:inline-block hover:shadow-xl hover:bg-purple-200 hover:text-purple-600"
          href="#signup"
        >
          Get the Course
        </a>
      </div>
    </div>
  );
}

export default Header;
