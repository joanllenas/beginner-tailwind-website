import Header from "./Header";

function App() {
  return (
    <div className="text-gray-700">
      <Header />

      {/* 
    ------------------------------------------------
    hero
    ------------------------------------------------
    */}

      <div className="p-20 bg-gray-300">
        <div className="container px-6 py-24 mx-auto text-center lg:px-0">
          <h1 className="mb-4">Beginner Tailwind</h1>

          <p className="mb-8">
            Make good looking designs quickly without a single line of CSS
          </p>

          <a className="inline-block mb-32" href="#link">
            Get the course
          </a>

          <div className="relative">
            <img src="https://i.imgur.com/wysbBMS.png" alt="" />

            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 bg-yellow-100">
              <p>
                We'll create BeginnerTailwind.com (it's the site you're on now)
              </p>
              <p>We'll do it all without a single line of custom CSS!</p>
            </div>
          </div>
        </div>
      </div>

      {/* 
    ------------------------------------------------
    overview
    ------------------------------------------------
    */}

      <div className="p-20 bg-gray-50"></div>

      {/* 
    ------------------------------------------------
    about me
    ------------------------------------------------
    */}

      <div className="p-20 bg-gray-300"></div>

      {/* 
    ------------------------------------------------
    what you'll learn
    ------------------------------------------------
    */}

      <div className="p-20 bg-gray-50"></div>

      {/* 
    ------------------------------------------------
    what we'll build
    ------------------------------------------------
    */}

      <div className="p-20 bg-gray-300"></div>

      {/* 
    ------------------------------------------------
    pricing
    ------------------------------------------------
    */}

      <div className="p-20 bg-gray-50"></div>

      {/* 
    ------------------------------------------------
    faq
    ------------------------------------------------
    */}

      <div className="p-20 bg-gray-300"></div>

      {/* 
    ------------------------------------------------
    footer
    ------------------------------------------------
    */}
    </div>
  );
}

export default App;
