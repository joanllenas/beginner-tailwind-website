function Hero() {
  return (
    <div className="relative">
      {/* purple square at the bottom */}
      <div className="absolute bottom-0 w-full h-64 bg-purple-700"></div>

      {/* hero */}
      <div className="container px-6 py-24 mx-auto text-center">
        <h1 className="mb-4 text-3xl font-extrabold md:text-4xl lg:text-6xl font-fun">
          <span className="text-transparent bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text">
            Beginner
          </span>
          <span className="text-transparent bg-gradient-to-r from-teal-500 to-purple-500 via-teal-600 bg-clip-text">
            Tailwind
          </span>
        </h1>

        <p className="mb-8 text-lg text-gray-700 lg:text-2xl">
          Make good looking designs quickly without a single line of CSS
        </p>

        <a
          className="inline-block px-12 py-3 mb-16 text-lg font-bold text-purple-100 transition duration-500 rounded shadow-lg lg:mb-32 hover:text-white bg-gradient-to-br from-purple-500 to-purple-700 hover:to-purple-600 hover:shadow-2xl"
          href="#link"
        >
          Get the course
        </a>

        {/* teaser image */}
        <div className="relative">
          <img
            src="https://i.imgur.com/wysbBMS.png"
            alt=""
            className="border-4 border-purple-400 rounded-lg shadow-xl"
          />

          {/* teaser image info */}
          <div className="px-8 py-4 mt-8 text-sm text-left text-yellow-800 bg-yellow-100 border-t-4 border-yellow-500 rounded shadow-lg lg:text-base lg:top-0 lg:right-0 lg:mt-0 lg:translate-x-4 lg:-translate-y-4 lg:transform lg:absolute">
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
