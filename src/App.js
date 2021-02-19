import Header from "./Header";
import Hero from "./Hero";
import Circles from "./Circles";

function App() {
  return (
    <div className="text-gray-700">
      <div className="bg-gradient-to-br from-white to-gray-300">
        <Circles classes={["top-5", "left-5"]} />
        <Circles
          classes={[
            "top-0 right-0",
            "mr-48",
            "transform -translate-x-64 translate-y-64",
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

      <div className="p-20 bg-gray-50">overview</div>

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
