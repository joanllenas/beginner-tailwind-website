function Hero() {
  return (
    <div className="p-20">
      <div className="container relative px-6 py-24 mx-auto text-center lg:px-0">
        <h1 className="mb-4 text-6xl font-extrabold">
          <span className="text-transparent bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text">
            Beginner
          </span>
          <span className="text-transparent bg-gradient-to-r from-teal-500 to-purple-500 via-teal-600 bg-clip-text">
            Tailwind
          </span>
        </h1>

        <p className="mb-8 text-2xl text-gray-700">
          Make good looking designs quickly without a single line of CSS
        </p>

        <a
          className="inline-block px-12 py-3 mb-32 text-lg font-bold text-purple-100 transition duration-500 rounded shadow-lg hover:text-white bg-gradient-to-br from-purple-500 to-purple-700 hover:to-purple-600 hover:shadow-2xl"
          href="#link"
        >
          Get the course
        </a>

        <div className="relative">
          <img
            src="https://i.imgur.com/wysbBMS.png"
            alt=""
            className="border-4 border-purple-400 rounded-lg shadow-xl"
          />

          <div className="absolute top-0 right-0 px-8 py-4 text-left text-yellow-800 transform translate-x-4 -translate-y-4 bg-yellow-100 border-t-4 border-yellow-500 rounded shadow-lg">
            <p>
              <strong className="font-bold">
                We'll create BeginnerTailwind.com
              </strong>{" "}
              <span className="opacity-50">(it's the site you're on now)</span>
            </p>
            <p>We'll do it all without a single line of custom CSS!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
