import Header from "./Header";
import Hero from "./Hero";
import Circles from "./Circles";
import Overview from "./Overview";

function App() {
  return (
    <div className="text-gray-700">
      <div className="bg-gradient-to-br from-white to-gray-300">
        <Circles
          classes={[
            "top-0 left-0",
            "transform -translate-x-10 -translate-y-10",
            "lg:translate-x-4 lg:translate-y-4",
          ]}
        />
        <Circles
          classes={[
            "top-0 right-0",
            "mr-48",
            "transform -translate-x-64 translate-y-64",
            "hidden lg:block",
          ]}
        />

        <Header />
        <Hero />
      </div>

      {/* 
    ------------------------------------------------
    overview
    ------------------------------------------------
    */}

      <Overview />

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
