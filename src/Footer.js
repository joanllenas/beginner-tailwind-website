import Circles from "./Circles";

function Footer() {
  return (
    <div className="relative py-24 text-gray-700 bg-gradient-to-br from-gray-100 to-gray-300">
      <Circles
        classes={[
          "top-0 left-0",
          "transform translate-x-2 translate-y-2",
          "lg:translate-x-4 lg:translate-y-4",
          "scale-50",
          "lg:scale-75",
        ]}
      />

      <div className="container relative px-6 mx-auto">
        {/* top footer */}
        <div className="justify-between space-y-12 lg:flex lg:space-y-0">
          {/* newsletter */}
          <div className="flex flex-col justify-center">
            <h4 className="mb-4 text-3xl font-bold text-transparent lg:text-5xl bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
              Get Updates on this course
            </h4>
            <form action="" className="flex">
              <input
                placeholder="super@secret.com"
                className="w-full p-3 placeholder-gray-300 border-2 border-r-0 border-gray-400 rounded-l outline-none focus:border-purple-400"
                type="email"
                name="email"
              />
              <button className="p-3 text-purple-100 bg-purple-400 rounded-r">
                Subscribe
              </button>
            </form>
          </div>
          {/* links */}
          <div className="space-y-8 text-center text-gray-600 md:flex md:justify-center md:space-x-8 md:space-y-0 lg:text-right">
            {[0, 1, 2].map((cell, index) => (
              <div className="space-y-2" key={index}>
                <p className="mb-3 font-bold tracking-widest text-gray-400 uppercase">
                  Links {index}
                </p>
                <a
                  href="#link"
                  className="block hover:text-gray-800 hover:underline"
                >
                  About
                </a>
                <a
                  href="#link"
                  className="block hover:text-gray-800 hover:underline"
                >
                  Blog
                </a>
                <a
                  href="#link"
                  className="block hover:text-gray-800 hover:underline"
                >
                  Career
                </a>
                <a
                  href="#link"
                  className="block hover:text-gray-800 hover:underline"
                >
                  Something
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* bottom footer */}
        <div className="justify-between pt-4 mt-16 space-y-4 text-sm text-center text-gray-500 border-t border-gray-300 md:flex md:text-left md:space-y-0">
          {/* copyright */}
          <div>Copyright &copy; 2021</div>
          {/* links */}
          <div className="space-x-4">
            <a href="#link">Discord</a>
            <a href="#link">YouTube</a>
            <a href="#link">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
