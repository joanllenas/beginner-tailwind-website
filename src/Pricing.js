function Pricing() {
  return (
    <div className="relative py-32 text-blue-200 bg-blue-600">
      {/* gray box on top */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gray-300"></div>

      <div className="container flex flex-col items-center px-6 mx-auto space-y-4 lg:space-y-0 lg:space-x-8 lg:flex-row">
        {/* left box */}
        <div className="order-2 pt-12 space-y-2 text-2xl text-center lg:text-right lg:order-1 lg:w-1/3">
          <p>
            <strong className="font-bold text-white">75 videos</strong> at a
            smooth pace
          </p>
          <p>
            <strong className="font-bold text-white">9.25 hours</strong> of
            learning + building
          </p>
          <p>
            <strong className="font-bold text-white">Source code</strong> and
            CodePens
          </p>
        </div>

        {/* pricing box */}
        <div className="relative order-1 w-full p-8 space-y-8 text-center text-gray-800 duration-500 transform bg-white border-8 border-purple-700 rounded shadow-2xl lg:order-2 lg:w-1/3 hover:scale-110">
          <div className="absolute inset-x-0 top-0 flex items-end justify-center space-x-8 transform -translate-y-full">
            <div className="w-2 h-16 mb-8 origin-bottom transform -rotate-45 bg-red-500 rounded"></div>
            <div className="w-2 h-24 mb-8 bg-yellow-500 rounded"></div>
            <div className="w-2 h-16 mb-8 origin-bottom transform rotate-45 bg-green-500 rounded"></div>
          </div>

          <h4 className="text-lg text-gray-600">
            Start Tailwind<span className="italic">-ing</span>!
          </h4>
          <div className="text-6xl font-bold text-purple-800">
            <span className="opacity-50">$</span>
            <span className="text-red-600 line-through">47</span> 37.60
          </div>
          <a
            href="#link"
            alt=""
            className="block p-3 text-yellow-800 duration-300 transform rounded shadow hover:text-yellow-900 hover:shadow-xl via-yellow-500 bg-gradient-to-br from-yellow-400 to-orange-400"
          >
            Buy the Course
          </a>
        </div>

        {/* right box */}
        <div className="order-3 pt-12 space-y-2 text-2xl text-center lg:text-left lg:w-1/3">
          <p>
            Use the code in{" "}
            <strong className="font-bold text-white">your projects</strong>
          </p>
          <p>
            Access to <strong className="font-bold text-white">Discord</strong>{" "}
            for support
          </p>
          <p>
            Lifetime{" "}
            <strong className="font-bold text-white">refund guarantee</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
